import { useQuery } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";
import { Endpoints } from "../common/constants/endpoints.constants";

type BusData = {
    to: any;
    from: any;
    id: string;
    traveller: string;
    type: string;
    ratings: string;
    seats: string;
    timing: string;
    price: string;
  };
const useFetchBusDetails =()=>{

    return(
        useQuery<AxiosResponse<any,any>,Error,AxiosResponse<BusData[]>>({
            queryKey: ['busDetailsData'],
            queryFn: ()=> axios.get(Endpoints.BUS_LIST).then(res=>res)
        })

    )
}
export default useFetchBusDetails;