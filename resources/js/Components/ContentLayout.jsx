import React from "react";
import { Head } from "@inertiajs/react";
import TableData from "./TableData";
function ContentLayout({
    canView,
    canEdit,
    canDelete,
    title,
    tableObject,
    editRecord,
    onOpen,
    handleDelete,
    tableColumns,
    initialColumns,
    baseurl,
    currency,
}) {
    return (
        <div>
            <Head title={title} />

            <div className="py-8">
                <div className=" mx-auto  ">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <TableData
                                canView={canView}
                                canEdit={canEdit}
                                canDelete={canDelete}
                                currency={currency}
                                onOpen={onOpen}
                                editRecord={editRecord}
                                handleDelete={handleDelete}
                                baseurl={baseurl}
                                modelObject={tableObject}
                                objectColumn={tableColumns}
                                initialColumns={initialColumns}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContentLayout;
