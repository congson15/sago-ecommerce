import * as React from 'react';
import { Comment } from './Comment';
export interface ProductReviewProps {
}

export function ProductReview(props: ProductReviewProps) {
    return (
        <div>
            <div className="flex items-center rounded-xl max-w-lg">
                <form className="w-full max-w-xl bg-white rounded-lg pt-2">
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <h2 className="px-4 pt-3 pb-2 text-my-color text-lg font-semibold">Write review</h2>
                        <div className="w-full md:w-full px-3 mb-2 mt-2">
                            <textarea className="bg-gray-50 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-400 focus:outline-none focus:bg-white" name="body" placeholder='You must write at least 50 character for this field' required></textarea>
                        </div>
                        <div className="ml-4 my-5">
                            <input type='submit' className="bg-white text-gray-700 font-medium py-1 px-4 border border-gray-400 rounded-lg tracking-wide mr-1 hover:bg-gray-100" value='Submit' />
                        </div>
                    </div>
                </form>
            </div>
            <div className="max-h-500 overflow-y-scroll">
                <Comment />
                <Comment />
                <Comment />
                <Comment />
            </div>
        </div>
    );
}
