import LoadingCSS from "../styles/loading.module.css";

export const Loading = () => {
  return (
    <div className={LoadingCSS.loading}>
      <div className={LoadingCSS.s1}></div>
      <div className={LoadingCSS.s2}></div>
      <div className={LoadingCSS.s3}></div>
    </div>
  );
};
