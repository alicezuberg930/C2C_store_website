'use client'
import { momo } from "@/services/api.service";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

const Test = () => {
    const searchParams = useSearchParams();
    const paramsObject = Object.fromEntries(searchParams.entries());


    useEffect(() => {
        // momo()
    }, [])


    return (
        <>
            {JSON.stringify(paramsObject)}
            <hr />
        </>
    )
}

export default Test