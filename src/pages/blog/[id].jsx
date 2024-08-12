import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Blogdetail = () => {
  const { query } = useRouter();
  const [articledetail, setArticledetail] = useState(null);
  const getArticleDetail = async (id) => {
    const res = await fetch(`https://dev.to/api/articles/${id}`);
    const data = await res.json();
    setArticledetail(data);
  };

  useEffect(() => {
    getArticleDetail(query.id);
  }, []);
  return (
    <div className="container m-auto">
      <div dangerouslySetInnerHTML={{ __html: articledetail?.body_html }}></div>
    </div>
  );
};
export default Blogdetail;
