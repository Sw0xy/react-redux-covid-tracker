import React from "react";
import styles from "./styles.module.css";
import { useSelector } from "react-redux";
function Cards() {
  const data = useSelector((state) => state.covid.items);
  console.log(data);

  return (
    <div className={styles.cards}>
      {data.length === 0 ? (
        <div>Loading....</div>
      ) : (
        
        <>
      
         <div className={styles.card1}>
           <div className={styles.card__header}>
             <h1>Infected</h1>
           </div>
           <div style={{ border: "2px solid #015AAB", borderRadius: "5px" }} />
           <div className={styles.card__body}>
             <h1>
               <span className={styles.infected}>{data.confirmed.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
             </h1>
             <span className={styles.last__update}>
               Last Updated at : {data.lastUpdate.split("T")[0]}
             </span>
             <br></br>
             <br></br>
             <span className={styles.footer__text}>
               {" "}
               Number of active cases of COVID-19
             </span>
           </div>
         </div>

         <div className={styles.card2}>
           <div className={styles.card__header}>
             <h1>Deaths</h1>
           </div>
           <div style={{ border: "2px solid #A01111", borderRadius: "5px" }} />
           <div className={styles.card__body}>
             <h1>
               <span className={styles.infected}>{data.deaths.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
             </h1>
             <span className={styles.last__update}>
               Last Updated at : {data.lastUpdate.split("T")[0]}
             </span>
             <br></br>
             <br></br>
             <span className={styles.footer__text}>
               {" "}
               Number of active cases of COVID-19
             </span>
           </div>
           
         </div>
         <div className={styles.card3}>
        <div className={styles.card__header}>
          <h1>Active</h1>
        </div>
        <div style={{ border: "2px solid #02800E", borderRadius: "5px" }} />
        <div className={styles.card__body}>
          <h1>
            <span className={styles.infected}>{ data.confirmed.value - data.recovered.value - data.deaths.value }</span>
          </h1>
          <span className={styles.last__update}>
            Last Updated at : {data.lastUpdate.split("T")[0]}
          </span>
          <br></br>
          <br></br>
          <span className={styles.footer__text}>
            Number of active cases of COVID-19
          </span>
        </div>
      </div>
       </>
      )}
    </div>
  );
}

export default Cards;
