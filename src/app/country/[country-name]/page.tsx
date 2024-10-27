"use client";
import Link from "next/link";
import { countries } from "@/app/countryDetails";

export default function Country() {
  return(
  <div>
    <h1><b>Country List</b></h1>
    <ul> {Object.keys(countries).map((countryKey)=>(
      <li key={countryKey} className="country-iem">
      <Link href={`/country/${countryKey}`} passHref>
      <span className="country-link">{countries[countryKey].Name}</span>
      </Link>
      </li>
    ))}

    </ul>
    <style jsx>
      {`
      .countainer{
      padding:20px;
      font-size:24px;
      text-aligen: center;
      border-radius: 8px;
      max-widh: 600px;
      margin:0 auto;
      box-shadow: 0 4px 8 px rgba(0,0,0.1);
      } 
      h1{
      font-size:32px;
      color:#334;
      margin-bottom:20px;}
      
      ul{
      padding:0;
      list-style:none;

      }
      .country-item{
      margin:10px;
      }
      .country-link {
      display:inline-block;
      padding:10px 20px
      background:#f5e1fd;
      border-radius:5px;
      color:#334;
      text-decoration:none;

      transition:all 0.3sease;
      }
      .country-link:hover{
      background-color:#ce9dd9;
      color:white;
      border-color:white;
      box-shadow:0 6px 12px rgba(0,0,0.1);
      transform:translateY(-3px)
      }
      `}
    </style>
  </div>
);
}