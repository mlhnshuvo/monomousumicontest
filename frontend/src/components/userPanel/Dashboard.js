import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMyArticle } from "../../store/actions/articleAction";
import { ispaysubmitGet } from "../../store/actions/isPaySubmitAction";
import { getAward } from "../../store/actions/giveAwardAction";
import { getAuthor } from "../../store/actions/authorAction";
import { getQuarterAnnounce } from "../../store/actions/quarterlyAnnounceAction";

const Dashboard = () => {
  const dispatch = useDispatch();
  const userReducer = useSelector((store) => store.userReducer);
  const articleReducer = useSelector((store) => store.articleReducer);
  const isPaySubmitReducer = useSelector((store) => store.isPaySubmitReducer);
  const awardReducer = useSelector((store) => store.awardReducer);
  const authorReducer = useSelector((store) => store.authorReducer);
  const quarterlyAnnounceReducer = useSelector(
    (store) => store.quarterlyAnnounceReducer
  );

  useEffect(() => {
    dispatch(getMyArticle());
    dispatch(ispaysubmitGet());
    dispatch(getQuarterAnnounce());
    dispatch(getAward());
    dispatch(getAuthor());
  }, [dispatch]);

  let sum = 0;
  articleReducer.articles.map((article) => {
    return article.sharedLinks.map((link) => {
      return (sum += link);
    });
  });

  let avgMarks = 0;
  articleReducer.articles.map((article) => {
    return (avgMarks = avgMarks + article.finalMarks);
  });

  let sharedArticle = 0;
  articleReducer.articles.map((article) => {
    return article.sharedLinks.forEach(() => {
      sharedArticle++;
    });
  });

  return (
    <div className="max-w-7xl px-4 sm:px-6 lg:px-8 m-auto">
      <p className="text-3xl my-10 text-center">
        Hi {userReducer.user && userReducer.user.name}, Your Achivements
      </p>
      <div className="flex justify-between gap-4 flex-wrap">
        <div className="shadow-lg bg-gray-50 w-72 py-10 border">
          <div className="flex items-center gap-5 justify-center">
            <i className="fa-solid fa-pen text-xl bg-green-500 w-12 h-12 flex items-center pt-3 rounded-full border-gray-500 pl-3 border-2"></i>
            <p className="text-2xl">ARTICLES</p>
          </div>
          <p className="text-2xl text-center">
            {articleReducer.articles.length
              ? articleReducer.articles.length
              : 0}
          </p>
        </div>
        <div className="shadow-lg bg-gray-50 w-72 py-10 border">
          <div className="flex items-center gap-5 justify-center">
            <i className="fa-solid fa-pen text-xl bg-green-500 w-12 h-12 flex items-center pt-3 rounded-full border-gray-500 pl-3  border-2"></i>
            <p className="text-2xl">AVG MARK</p>
          </div>
          <p className="text-2xl text-center">
            {avgMarks / articleReducer.articles.length
              ? avgMarks / articleReducer.articles.length
              : 0}
          </p>
        </div>
        <div className="shadow-lg bg-gray-50 w-72 py-10 border">
          <div className="flex items-center gap-5 justify-center">
            <i className="fa-solid fa-pen text-xl bg-green-500 w-12 h-12 flex items-center pt-3 rounded-full border-gray-500 pl-3  border-2"></i>
            <p className="text-2xl">SHARED ARTICLES</p>
          </div>
          <p className="text-2xl text-center">
            {sharedArticle ? sharedArticle : 0}
          </p>
        </div>
        <div className="shadow-lg bg-gray-50 w-72 py-10 border">
          <div className="flex items-center gap-5 justify-center">
            <i className="fa-solid fa-crown text-xl bg-green-500 w-12 h-12 flex items-center pt-3 rounded-full border-gray-500 pl-3  border-2"></i>
            <p className="text-2xl">AWARDS</p>
          </div>
          <p className="text-2xl text-center">
            {awardReducer.award.length ? awardReducer.award.length : 0}
          </p>
        </div>
        <div className="shadow-lg bg-gray-50 w-72 py-10 border">
          <div className="flex items-center gap-5 justify-center">
            <i className="fa-solid fa-book text-xl bg-green-500 w-12 h-12 flex items-center pt-3 rounded-full border-gray-500 pl-3  border-2"></i>
            <p className="text-2xl">Author Cert.</p>
          </div>
          <p className="text-2xl text-center">
            {authorReducer.author.length ? authorReducer.author.length : 0}
          </p>
        </div>
      </div>
      <p className="text-3xl mt-28 text-center animationBg">
        {quarterlyAnnounceReducer.data &&
        quarterlyAnnounceReducer.data.toggleStartStop ? (
          isPaySubmitReducer.ispaysubmitObj &&
          isPaySubmitReducer.ispaysubmitObj.isPayment ? (
            <p className="border p-4">
              You can submit article 3 times by paying one time
            </p>
          ) : (
            <p className="border p-4">
              Pay the registration fee, Submit your article and Win Prizes!
            </p>
          )
        ) : (
          <p className="border p-4">
            Quarterly Will Be Start Soon. Stay With Us!
          </p>
        )}
      </p>
    </div>
  );
};

export default Dashboard;
