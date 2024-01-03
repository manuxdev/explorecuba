import { useTranslations } from "next-intl";

import CommentsList from "./CommentsList";

const Comments = () => {
  const t = useTranslations("Home");
  return (
    <section className=" h-auto md:pr-16 pr-0 mb-20">
      <div className="md:mt-0 mt-20">
        <div className="flex justify-center items-center flex-col text-center">
          <h2 className="font-bold text-3xl text-paleta-blue-900">
            {t("Comments.h2")}
          </h2>
          <p className="mt-3">{t("Comments.p")}</p>
          <CommentsList />
        </div>
      </div>
    </section>
  );
};

export default Comments;
