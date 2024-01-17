function u(t,r="ZMW",n="en-US"){return new Intl.NumberFormat(n,{style:"currency",currency:r,minimumFractionDigits:0,maximumFractionDigits:0}).format(t).split(" ")[0]}export{u as f};
