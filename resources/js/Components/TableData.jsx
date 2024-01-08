import React from 'react'
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Input,
  Button,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  DropdownItem,
 
  Pagination,

  useDisclosure,
 
} from "@nextui-org/react";
import {  router , Link } from '@inertiajs/react';
import { VerticalDotsIcon } from './icons/VerticalDotsIcon';
function TableData({modelObject,objectColumn,initialColumns,onOpen,baseurl}) {
 
  // const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [filterValue, setFilterValue] = React.useState("");
  const [selectedKeys, setSelectedKeys] = React.useState(new Set([]));
  const [visibleColumns, setVisibleColumns] = React.useState(new Set(initialColumns));
  const [statusFilter, setStatusFilter] = React.useState("all");
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [sortDescriptor, setSortDescriptor] = React.useState({
    column: "age",
    direction: "ascending",
  });


    const [page, setPage] = React.useState(1);

    const hasSearchFilter = Boolean(filterValue);
  
    const headerColumns = React.useMemo(() => {
      if (visibleColumns === "all") return objectColumn;
  
      return objectColumn.filter((column) => Array.from(visibleColumns).includes(column.uid));
    }, [visibleColumns]);
  
    const filteredItems = React.useMemo(() => {
      let filteredObj = [...modelObject];
  
      if (hasSearchFilter) {
        const searchKey = Object.keys(filteredObj[0])[1];
        console.log('searchKey :',searchKey);
        filteredObj = filteredObj.filter((obj) =>
        String(obj[searchKey]).toLowerCase().includes(filterValue.toLowerCase()),
          // obj.firstname.toLowerCase().includes(filterValue.toLowerCase()),
        );
      }
      if (statusFilter !== "all" && Array.from(statusFilter).length !== statusOptions.length) {
        filteredObj = filteredObj.filter((obj) =>
          Array.from(statusFilter).includes(obj.status),
        );
      }
  
      return filteredObj;
    }, [modelObject, filterValue, statusFilter]);
  
    const pages = Math.ceil(filteredItems.length / rowsPerPage);
  
    const items = React.useMemo(() => {
      const start = (page - 1) * rowsPerPage;
      const end = start + rowsPerPage;
  
      return filteredItems.slice(start, end);
    }, [page, filteredItems, rowsPerPage]);
  
    const sortedItems = React.useMemo(() => {
      return [...items].sort((a, b) => {
        const first = a[sortDescriptor.column  ]  ;
        const second = b[sortDescriptor.column  ];
        const cmp = first < second ? -1 : first > second ? 1 : 0;
  
        return sortDescriptor.direction === "descending" ? -cmp : cmp;
      });
    }, [sortDescriptor, items]);
  
    const renderCell = React.useCallback((obj , columnKey ) => {
      const cellValue = obj[columnKey];
  
      switch (columnKey) {
        case "name":
          return (
            <div className="flex flex-col">
            {/* <p className="text-bold text-small capitalize">{cellValue}</p> */}
            <p className="text-bold  capitalize  ">{obj.name}</p>
          </div>
          );
          case "description":
            return (
              <div className="flex flex-col">
              {/* <p className="text-bold text-small capitalize">{cellValue}</p> */}
              <p className="text-bold text-tiny capitalize text-default-400">{obj.description}</p>
            </div>
            );
            
        case "category":
          return (
            <div className="flex flex-col">
              {/* <p className="text-bold text-small capitalize">{cellValue}</p> */}
              <p className="text-bold text-tiny capitalize text-default-400">{obj.category}</p>
            </div>
          );
          case "total":
            return (
              <div className="flex flex-col">
                {/* <p className="text-bold text-small capitalize">{cellValue}</p> */}
                <p className="text-bold text-tiny capitalize ">K{obj.total}</p>
              </div>
            );
        case "supplier":
          return (
            <div className="flex flex-col">
            {/* <p className="text-bold text-small capitalize">{cellValue}</p> */}
            <p className="text-bold text-tiny capitalize text-default-400">{obj.supplier}</p>
          </div>
          );
          case "base_price":
          return (
            <div className="flex flex-col">
            {/* <p className="text-bold text-small capitalize">{cellValue}</p> */}
            <p className="text-bold text-tiny capitalize text-default-400">K{obj.base_price}</p>
          </div>
          );
        case "actions":
          return (
            <div className="relative flex justify-end items-center gap-2">
              <Dropdown>
                <DropdownTrigger>
                  <Button isIconOnly size="sm" variant="light">
                    <VerticalDotsIcon className="text-default-300" />
                   
                  </Button>
                </DropdownTrigger>
                <DropdownMenu>
                  <DropdownItem
                  // href={baseurl+obj.id}
                  onClick={() => {
                    router.visit(`${baseurl+obj.id}`)
                  }}

                  >View</DropdownItem>
                  {/* <DropdownItem>Edit</DropdownItem> */}
                  <DropdownItem>Delete</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
          );
        default:
          return cellValue;
      }
    }, []);
  
    const onNextPage = React.useCallback(() => {
      if (page < pages) {
        setPage(page + 1);
      }
    }, [page, pages]);
  
    const onPreviousPage = React.useCallback(() => {
      if (page > 1) {
        setPage(page - 1);
      }
    }, [page]);
  
    const onRowsPerPageChange = React.useCallback((e) => {
      setRowsPerPage(Number(e.target.value));
      setPage(1);
    }, []);
  
    const onSearchChange = React.useCallback((value) => {
      if (value) {
        setFilterValue(value);
        setPage(1);
      } else {
        setFilterValue("");
      }
    }, []);
  
    const onClear = React.useCallback(()=>{
      setFilterValue("")
      setPage(1)
    },[])
  
    const topContent = React.useMemo(() => {
      return (
        <div className="flex flex-col gap-4">
          <div className="flex justify-between   items-end">
            <Input
               style={{ border: 'none', outline: 'none', boxShadow: 'none' }}
              isClearable
              className="w-full sm:max-w-[44%]"
              placeholder="Search..."
              // startContent={<SearchIcon />}
              value={filterValue}
              onClear={() => onClear()}
              onValueChange={onSearchChange}
            />
            <div className="flex gap-3">
              {/* <Dropdown>
                <DropdownTrigger className="hidden sm:flex">
                  <Button endContent={<ChevronDownIcon className="text-small" />} variant="flat">
                    Status
                  </Button>
                </DropdownTrigger>
                <DropdownMenu
                  disallowEmptySelection
                  aria-label="Table Columns"
                  closeOnSelect={false}
                  selectedKeys={statusFilter}
                  selectionMode="multiple"
                  onSelectionChange={setStatusFilter}
                >
                  {statusOptions.map((status) => (
                    <DropdownItem key={status.uid} className="capitalize">
                      {capitalize(status.name)}
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </Dropdown> */}
              <Dropdown>
                <DropdownTrigger className="hidden sm:flex">
                  <Button
                  //  endContent={<ChevronDownIcon className="text-small" />}
                  
                  variant="flat">
                    Columns
                  </Button>
                </DropdownTrigger>
                <DropdownMenu
                  disallowEmptySelection
                  aria-label="Table Columns"
                  closeOnSelect={false}
                  selectedKeys={visibleColumns}
                  selectionMode="multiple"
                  onSelectionChange={setVisibleColumns}
                >
                  {objectColumn.map((column) => (
                    <DropdownItem key={column.uid} className="capitalize">
                      
                      {
                      // capitalize(
                        column.name
                        // )
                      }
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </Dropdown>
              <Button color="primary" endContent={
              // <PlusIcon />
              ""
              }  onPress={() => {
                onOpen()
              }
                }>
                Add New
              </Button>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-default-400 text-small">Total {modelObject.length} Entries</span>
            <label className="flex items-center text-default-400 text-small">
              Rows per page:
              <select
                style={{ border: "none", outline: "none", ":focus": { outline: "none" } }}
                className="bg-transparent outline-none text-default-400 text-small"
                onChange={onRowsPerPageChange}
              >
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
              </select>
            </label>
          </div>
        </div>
      );
    }, [
      filterValue,
      statusFilter,
      visibleColumns,
      onSearchChange,
      onRowsPerPageChange,
      modelObject.length,
      hasSearchFilter,
    ]);
  
    const bottomContent = React.useMemo(() => {
      return (
        <div className="py-2 px-2 flex justify-between items-center">
          <span className="w-[30%] text-small text-default-400">
            {selectedKeys === "all"
              ? "All items selected"
              : `${selectedKeys.size} of ${filteredItems.length} selected`}
          </span>
          <Pagination
            isCompact
            showControls
            showShadow
            color="primary"
            page={page}
            total={pages}
            onChange={setPage}
          />
          <div className="hidden sm:flex w-[30%] justify-end gap-2">
            <Button isDisabled={pages === 1} size="sm" variant="flat" onPress={onPreviousPage}>
              Previous
            </Button>
            <Button isDisabled={pages === 1} size="sm" variant="flat" onPress={onNextPage}>
              Next
            </Button>
          </div>
        </div>
      );
    }, [selectedKeys, items.length, page, pages, hasSearchFilter]);
  
  return (
    <div>
      <Table
      aria-label="Example table with custom cells, pagination and sorting"
      isHeaderSticky
      bottomContent={bottomContent}
      bottomContentPlacement="outside"
      classNames={{
        wrapper: "max-h-[382px]",
      }}
      selectedKeys={selectedKeys}
      selectionMode="multiple"
      sortDescriptor={sortDescriptor}
      topContent={topContent}
      topContentPlacement="outside"
      onSelectionChange={setSelectedKeys}
      onSortChange={setSortDescriptor}
    >
      <TableHeader columns={headerColumns}>
        {(column) => (
          <TableColumn
            key={column.uid}
            align={column.uid === "actions" ? "center" : "start"}
            allowsSorting={column.sortable}
          >
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody isLoading={status=="loading"? true: false}   loadingContent={
      // <Spinner label="Loading..." />
      ""
      } emptyContent={status === 'loading'? " " : sortedItems.length == 0 ? " No Items Found": " "} items={sortedItems}>
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
    </div>
  )
}

export default TableData