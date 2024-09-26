import React from "react";
import { useLocation, useSearchParams } from 'react-router-dom';

const EditExpensePage = () => {
    const location = useLocation();
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id")
    console.log(id)
    return (
        <div>
            This is from the edit expense component
        </div>
    )
};

export default EditExpensePage