import { useParams } from "react-router-dom";
import React from "react";

function VaultAppRoles(){
   const params= useParams();
return(
    <div className="vaultapproles">
        <div>Vault AppRoles</div>
        <div>data = {params.id}</div>
    </div>
);
}
export default VaultAppRoles;