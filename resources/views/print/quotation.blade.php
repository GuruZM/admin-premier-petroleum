<!doctype html>
<html lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Quotation</title>
    <style>
        @page {
            margin: 10mm 0; /* 20mm top and bottom, 0mm left and right */
        }
        body {
            margin: 0;
            padding: 0;
            width: 100%;
            height: 100%;
            color:#083756;
        }
        #content {
            margin: 0mm 20mm;
        }
        #head {
           
            width: 100%;
            display:  table;
            border:2px solid #000
        }
         .table-cell {
            display: table-cell;
            padding-right: 10px; /* optional: add some space between items */
        }
        .title{
            display:flex
        }
        h4 {
    margin: 0;
}
.w-full {
    width: 100%;
}
.w-half {
    width: 50%;
}
.margin-top {
    margin-top: 1.25rem;
}
.footer {
    font-size: 0.875rem;
    padding: 1rem;
    background-color: rgb(241 245 249);
}
table {
    width: 100%;
    border-spacing: 0;
}
table.products {
    font-size: 0.875rem;
}
table.products #header {
    background-color: #083756;
    padding:50px;
    font-family: "Calibri", sans-serif;
}
table.products #header tr td {
    font-weight: bold;
    font-size:12px;
    font-family: "Calibri", sans-serif;
}
table.products th {
    color: #ffffff;
    padding: 0.5rem;
}
table tr.items {
    background-color: rgb(241 245 249);
}
table tr.items td {
    padding: 0.5rem;
    font-weight: bold
}
.total {
    text-align: right;
    margin-top: 1rem;
    font-size: 0.875rem;
}
p{
    font-size: 12px;
    margin: 5;
    margin-left:0;
    font-family: 'Calibri', sans-serif;
}
 
.container {
    display: flex;
    justify-content: center;
    align-items: center;
            text-align: justify;
            width: 100%;
            
        }
        .inline-item {
            display: inline-block;
            width: 30%; /* Adjust the width as needed */
            margin-right: 10px; /* Optional: add space between items */
        }
        .container::after {
            content: '';
            display: inline-block;
            width: 100%;
        }
 
        h1 {
            font-size: 12px;
            font-family: 'Calibri', sans-serif;
            font-weight: bold;
            margin: 0;
            
        }
        h3{
            font-size: 14px;
            font-family: 'Calibri', sans-serif;
            font-weight: bold;
            margin:0;
        }
        .upper{
            text-transform: uppercase;
        }
        #items tr:nth-child(odd){background-color: #f2f2f2; border:1px solid #000}
        #items tr td{
            font-family: 'Calibri', sans-serif;
            padding:15px;
           
            
        }
        #items tr {
            border:1px solid #000
        }
    </style>
</head>
<body>
    
    {{-- {{ dd($quotation) }} --}}
  
    <img 
    width="100%"
    src="data:image/png;base64,{{ base64_encode(file_get_contents(public_path('/images/quotationbg.png'))) }} " alt="premier petroleum" >
 
   <div id="content">
    <div class="container" ">
        <div class="inline-item" style="  width:50%;margin-top:-300px">
            <h1 class="upper">Premier Petroleum Limited</h1>
            <p class="tpin upper" style="margin:0">TPIN : 2001480298</p>
           <div style="margin-top:30px">
            <h1>
                Quotation To:
               </h1>
            <h1>
                {{ $quotation->customer->company_name }}
               </h1>
               <p class="tpin upper" style="margin:0">TPIN : {{ $quotation->customer->tpin }}</p>
           </div>
        </div>
        {{-- <div class="inline-item">Item 2</div> --}}
        <div class="inline-item" style="text-align:right;padding-top:30px">
            <h1 class="upper">Premier Petroleum</h1>
            <p class="tpin " style="margin:0">4 on Bishops Road</p>
            <p class="tpin " style="margin:0">Bishops Office Park, Suite GF05 Block C</p>
            <p class="tpin " style="margin:0">10101 Lusaka</p>
            <p class="tpin " style="margin:0">Zambia</p>
            <p class="tpin " style="margin:0">Business ID: 120210025710</p>
            <p class="tpin " style="margin:0">Tax ID: 2001480298</p>
            <p class="tpin " style="margin:0">sales@premier-petroleum.com</p>
          
        </div>
    </div>
  
     <div style="text-align: right;margin-bottom:20px">
        <h1 style="display: inline">Date:</h1> 
       
            <h1 style="display: inline;text-align:right"> {{ \Carbon\Carbon::parse($quotation->date )->toFormattedDateString() }}   </h1> <br>

   
     </div>
 
    <div class="margin-">
        <table class="products" id="items" >
            <tr id="header" style="padding-20px">
                <th style="text-align:center">NO.</th>
                <th style="text-align:center">DESCRIPTION</th>
                <th style="text-align:center">QUANTITY</th>
                <th style="text-align:center">RATE</th>
                <th style="text-align:center">AMOUNT</th>
            </tr>
            
                @for ($i = 1; $i <= 7; $i++)
                    @if (isset($quotation->line_items[$i-1]))
                        <tr style="padding-top:5px">
                            <td style="text-align:center">
                                0{{ $i }}. <!-- This is the count -->
                            </td>
                            <td style="text-align:center ">
                                <h3>
                                {{ $quotation->line_items[$i-1]['description'] }}
                                </h3>
                            </td>
                            <td style="text-align:center">
                                <h3>
                                {{ $quotation->line_items[$i-1]['quantity'] }}

                                </h3>
                            </td>
                            <td style="text-align:center">
                                <h3>
                                {{ $quotation->line_items[$i-1]['rate'] }}

                                </h3>
                            </td>
                            <td style="text-align:center">
                                <h3>
                                {{ number_format($quotation->line_items[$i-1]['amount']) }}

                                </h3>
                            </td>
                        </tr>
                    @else
                        <tr style="padding-top:5px;border:10px solid gray">
                            <td style="text-align:center">
                                0{{ $i }}. <!-- This is the count -->
                            </td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    @endif
                @endfor
       
        </table>
     
    </div>

    <table style="position:relative">
        <tr>
            <td>
                <h3 style="margin-top:-60px">
                    <span className="font-black"> BANKING DETAILS:</span> 
                </h3>
            </td>
            <td  >
                <div class="flex flex-wrap   items-center justify-end" style="position:relative;top:0px;width;padding-top:20px ">
                    <div className="flex space-y-3 flex-col  w-fi  justify-end">
                        <table  style="padding-bottom :10px;padding-right:10px">
                            <tr>
                                <td style=" text-align:center">
                                    <h3>
                                       SUBTOTAL
                                    </h3>
                                </td>
                                <td>
                                    <h3 style="text-align:right">
                                 ZMW   {{ number_format($quotation->subtotal) }}

                                    </h3>
                                </td>
                            </tr>
                        </table>
                        <table   style="padding-bottom :10px;padding-right:10px">
                            <tr>
                                <td style=" text-align:center">
                                    <h3  >
                                        VALUE ADDED <br> TAX(16%) 
                                    </h3>
                                </td>
                                <td>
                                  <h3 style="text-align:right">
                                   ZMW {{ number_format($quotation->vat) }}

                                  </h3>
                                </td>
                            </tr>
                        </table>
                      
                        <table   style="padding :10px;text-align:center; background-color:#F16924;color:white">
                            <tr>
                                <td style="width:50%; text-align:center; ">
                                    <h3 style=" font-size:20px"  >
                                       TOTAL
                                    </h3>
                                </td>
                                <td style="text-align:right">
                                    <h3 style=" font-size:18px">
                                     ZMW {{ number_format($quotation->total, 2) }}
                                    </h3>
                                    
                                </td>
                            </tr>
                        </table>
                       
                    </div>
                   
            </td>
        </tr>

        <tr style="border:5px solid green ">

            <div style=" margin-top:-120px">
                <p class="text-sm  print:text-xs font-normal  ">
                    Name of Bank: STANBIC BANK
                </p>
                <p class="text-sm  print:text-xs font-normal">
                    Payment to: PREMIER PETROLEUM LIMITED
                </p>
                <p class="text-sm  print:text-xs font-normal">
                    Account No: 9130005329888 (ZMW)
                </p>
                <p class="text-sm  print:text-xs font-normal">
                Account No:  9130005451004 (USD)
                </p>
                
                <p class="text-sm  print:text-xs font-normal">
                Branch Code: 040002
                </p>
                <p class="text-lg   print:text-sm   ">
                    <span className="text-lg font-semibold print:text-sm   ">Swift Code:</span><span> SBICZMLX</span>
                </p>

                {{-- <h3 style="margin-top:30px">
                    PREPARED BY: <br>
             {{$invoice->user["name"]}}
                </h3> --}}
                
                </div>
        </tr>
    </table>

     
    
    {{-- <div style="border:10ox solid green">
        <div style="float: left; width: 65%; height: 80%; background-color: #cc6633;"></div>
        <div style=" margin-left: 35%; width: %; height: 80%; background-color: #3366cc;">
            1
        </div>
      </div> --}}

     

    
    

</div>
</body>
</html>

 