import React from "react";
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
import { router, Link } from "@inertiajs/react";
import { VerticalDotsIcon } from "./icons/VerticalDotsIcon";
import { formatCurrency } from "@/Utils/methods";
function TableData({
    modelObject,
    objectColumn,
    editRecord,
    initialColumns,
    handleDelete,
    onOpen,
    baseurl,
}) {
    // const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const [filterValue, setFilterValue] = React.useState("");
    const [selectedKeys, setSelectedKeys] = React.useState(new Set([]));
    const [visibleColumns, setVisibleColumns] = React.useState(
        new Set(initialColumns)
    );
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

        return objectColumn.filter((column) =>
            Array.from(visibleColumns).includes(column.uid)
        );
    }, [visibleColumns]);

    const filteredItems = React.useMemo(() => {
        let filteredObj = [...modelObject];

        if (hasSearchFilter) {
            const searchKey = Object.keys(filteredObj[0])[1];
            console.log("searchKey :", searchKey);
            filteredObj = filteredObj.filter(
                (obj) =>
                    String(obj[searchKey])
                        .toLowerCase()
                        .includes(filterValue.toLowerCase())
                // obj.firstname.toLowerCase().includes(filterValue.toLowerCase()),
            );
        }
        if (
            statusFilter !== "all" &&
            Array.from(statusFilter).length !== statusOptions.length
        ) {
            filteredObj = filteredObj.filter((obj) =>
                Array.from(statusFilter).includes(obj.status)
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
            const first = a[sortDescriptor.column];
            const second = b[sortDescriptor.column];
            const cmp = first < second ? -1 : first > second ? 1 : 0;

            return sortDescriptor.direction === "descending" ? -cmp : cmp;
        });
    }, [sortDescriptor, items]);

    const renderCell = React.useCallback((obj, columnKey) => {
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
                        <p className="text-bold   capitalize ">
                            {obj.description}
                        </p>
                    </div>
                );

            case "category":
                return (
                    <div className="flex flex-col">
                        {/* <p className="text-bold text-small capitalize">{cellValue}</p> */}
                        <p className="text-bold   capitalize  ">
                            {obj.category}
                        </p>
                    </div>
                );
            case "total":
                return (
                    <div className="flex flex-col">
                        {/* <p className="text-bold text-small capitalize">{cellValue}</p> */}
                        <p className="text-bold capitalize ">
                            {formatCurrency(obj.total)}
                        </p>
                    </div>
                );
            case "company_name":
                return (
                    <div className="flex flex-col">
                        {/* <p className="text-bold text-small capitalize">{cellValue}</p> */}
                        <p className="text-bold capitalize ">
                            {obj.company_name}
                        </p>
                    </div>
                );
            case "price":
                return (
                    <div className="flex flex-col">
                        {/* <p className="text-bold text-small capitalize">{cellValue}</p> */}
                        <p className="text-bold capitalize ">
                            {formatCurrency(obj.price)}
                        </p>
                    </div>
                );
            case "duty":
                return (
                    <div className="flex flex-col">
                        {/* <p className="text-bold text-small capitalize">{cellValue}</p> */}
                        <p className="text-bold capitalize ">
                            {formatCurrency(obj.duty)}
                        </p>
                    </div>
                );
            case "supplier":
                return (
                    <div className="flex flex-col">
                        {/* <p className="text-bold text-small capitalize">{cellValue}</p> */}
                        <p className="text-bold text-tiny capitalize text-default-400">
                            {obj.supplier}
                        </p>
                    </div>
                );
            case "base_price":
                return (
                    <div className="flex flex-col">
                        {/* <p className="text-bold text-small capitalize">{cellValue}</p> */}
                        <p className="text-bold text-tiny capitalize text-default-400">
                            {formatCurrency(obj.base_price)}
                        </p>
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
                                    onClick={() => {
                                        baseurl == "none"
                                            ? editRecord(obj)
                                            : router.visit(
                                                  `${baseurl + obj.id}/edit`
                                              );
                                    }}
                                >
                                    Edit
                                </DropdownItem>

                                {baseurl == "none" ? null : (
                                    <DropdownItem
                                        onClick={() => {
                                            router.visit(`${baseurl + obj.id}`);
                                        }}
                                    >
                                        View
                                    </DropdownItem>
                                )}

                                <DropdownItem
                                    onClick={() => {
                                        handleDelete(obj.id);
                                    }}
                                >
                                    Delete
                                </DropdownItem>
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

    const onClear = React.useCallback(() => {
        setFilterValue("");
        setPage(1);
    }, []);

    const topContent = React.useMemo(() => {
        return (
            <div className="flex flex-col gap-4">
                <div className="flex flex-col-reverse sm:flex-row gap-3  justify-between space-y-3  items-end">
                    <Input
                        style={{
                            border: "none",
                            outline: "none",
                            boxShadow: "none",
                        }}
                        isClearable
                        type="email"
                        size="sm"
                        radius="full"
                        variant="bordered"
                        placeholder="Search"
                        defaultValue="junior@nextui.org"
                        value={filterValue}
                        onClear={() => onClear()}
                        onValueChange={onSearchChange}
                        // onClear={() => console.log("input cleared")}
                        className="max-w-xs "
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
                                    endContent={
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            width="20"
                                            height="20"
                                            color="#000000"
                                            fill="none"
                                        >
                                            <path
                                                d="M17.5 7C18.9045 7 19.6067 7 20.1111 7.33706C20.3295 7.48298 20.517 7.67048 20.6629 7.88886C21 8.39331 21 9.09554 21 10.5L21 18.5C21 19.9045 21 20.6067 20.6629 21.1111C20.517 21.3295 20.3295 21.517 20.1111 21.6629C19.6067 22 18.9045 22 17.5 22C16.0955 22 15.3933 22 14.8889 21.6629C14.6705 21.517 14.483 21.3295 14.3371 21.1111C14 20.6067 14 19.9045 14 18.5L14 10.5C14 9.09554 14 8.39331 14.3371 7.88886C14.483 7.67048 14.6705 7.48298 14.8889 7.33706C15.3933 7 16.0955 7 17.5 7Z"
                                                stroke="currentColor"
                                                stroke-width="1.5"
                                            />
                                            <path
                                                d="M6.5 7C7.90446 7 8.60669 7 9.11114 7.33706C9.32952 7.48298 9.51702 7.67048 9.66294 7.88886C10 8.39331 10 9.09554 10 10.5L10 18.5C10 19.9045 10 20.6067 9.66294 21.1111C9.51702 21.3295 9.32952 21.517 9.11114 21.6629C8.60669 22 7.90446 22 6.5 22C5.09554 22 4.39331 22 3.88886 21.6629C3.67048 21.517 3.48298 21.3295 3.33706 21.1111C3 20.6067 3 19.9045 3 18.5L3 10.5C3 9.09554 3 8.39331 3.33706 7.88886C3.48298 7.67048 3.67048 7.48298 3.88886 7.33706C4.39331 7 5.09554 7 6.5 7Z"
                                                stroke="currentColor"
                                                stroke-width="1.5"
                                            />
                                            <path
                                                d="M15 2L13.4142 3.53318C12.7475 4.17772 12.4142 4.5 12 4.5C11.5858 4.5 11.2525 4.17773 10.5858 3.53318L9 2"
                                                stroke="currentColor"
                                                stroke-width="1.5"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                        </svg>
                                    }
                                    variant="bordered"
                                >
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
                                    <DropdownItem
                                        key={column.uid}
                                        className="capitalize"
                                    >
                                        {
                                            // capitalize(
                                            column.name
                                            // )
                                        }
                                    </DropdownItem>
                                ))}
                            </DropdownMenu>
                        </Dropdown>
                        <Button
                            className="bg-black text-white"
                            endContent={
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="20"
                                    height="20"
                                    color="#fff"
                                    fill="none"
                                >
                                    <path
                                        d="M12 8V16M16 12L8 12"
                                        stroke="currentColor"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2"
                                        stroke="currentColor"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        d="M2.5 8.5C2.86239 7.67056 3.3189 6.89166 3.85601 6.17677M6.17681 3.85598C6.89168 3.31888 7.67058 2.86239 8.5 2.5"
                                        stroke="currentColor"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                            }
                            onPress={() => {
                                onOpen();
                            }}
                        >
                            Add New
                        </Button>
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-default-400 text-small">
                        Total {modelObject.length} Entries
                    </span>
                    <label className="flex items-center text-default-400 text-small">
                        Rows per page:
                        <select
                            style={{
                                border: "none",
                                outline: "none",
                                ":focus": { outline: "none" },
                            }}
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
                    <Button
                        isDisabled={pages === 1}
                        size="sm"
                        variant="flat"
                        onPress={onPreviousPage}
                    >
                        Previous
                    </Button>
                    <Button
                        isDisabled={pages === 1}
                        size="sm"
                        variant="flat"
                        onPress={onNextPage}
                    >
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
                            align={
                                column.uid === "actions" ? "center" : "start"
                            }
                            allowsSorting={column.sortable}
                        >
                            {column.name}
                        </TableColumn>
                    )}
                </TableHeader>
                <TableBody
                    isLoading={status == "loading" ? true : false}
                    loadingContent={
                        // <Spinner label="Loading..." />
                        ""
                    }
                    emptyContent={
                        status === "loading"
                            ? " "
                            : sortedItems.length == 0
                            ? " No Items Found"
                            : " "
                    }
                    items={sortedItems}
                >
                    {(item) => (
                        <TableRow key={item.id}>
                            {(columnKey) => (
                                <TableCell>
                                    {renderCell(item, columnKey)}
                                </TableCell>
                            )}
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    );
}

export default TableData;
