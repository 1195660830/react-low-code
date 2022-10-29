// import Header from "./layout/Header";
// import Left from "./layout/Left";
// import Center from "./layout/Center";
// import Right from "./layout/Right";
// import styles from "./App.module.css";
import styles from "./App.less";

export default function App(props) {
  console.log(styles,'sdfs')
  return (
    <div className={styles.main}>
      12312312344
      {/* <Header />
      <div className={styles.content}>
        <Left />
        <Center />
        <Right />
      </div> */}
    </div>
  );
}