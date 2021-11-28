import * as React from 'react';

export interface LoadingProps {
}

export function Loading(props: LoadingProps) {
    return (
        <div className="min-h-screen flex justify-center items-center ">
            <img src="https://s1.uphinh.org/2021/07/21/loading.gif" />
        </div>
    );
}
