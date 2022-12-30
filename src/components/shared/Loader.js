import { TailSpin } from "react-loader-spinner";

export default function Loader () {
    return (
        <div style={{width: "100%", height: "1000px", display: "flex", justifyContent: "center "}}>
            <TailSpin height="100" width="100" color="gray" ariaLabel="loading" />
        </div>
    )
}