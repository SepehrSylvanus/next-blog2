import Image from "next/image";
import React from "react";
import styles from "./about.module.css";
const Aboutpage = () => {
  return (
    <div>
      <div className={styles.imgContainer}>
        <Image src={"https://images.pexels.com/photos/10917649/pexels-photo-10917649.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} alt="About image" fill />
      </div>
    </div>
  );
};

export default Aboutpage;
