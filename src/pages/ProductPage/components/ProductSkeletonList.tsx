import * as React from 'react';



export function ProductSkeletonList() {
    return (
        <div className="grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {Array(50).fill(null).map((item,index) => {
                return (
                    <div className="p-4" key={index}>
                        <div className="animate-pulse space-y-2">
                            <div className="bg-gray-200 h-48"></div>
                            <div className="flex-1 space-y-2">
                                <div className="h-6 bg-gray-200 full"></div>
                                <div className="h-6 bg-gray-200 w-2/3"></div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>

    );
}
