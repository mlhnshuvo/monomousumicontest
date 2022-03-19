import React from "react";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const userReducer = useSelector((store) => store.userReducer);
  
  return (
    <div className="max-w-7xl px-4 sm:px-6 lg:px-8 m-auto mb-72">
      <p className="text-3xl my-10 text-center">
        Hi {userReducer.user.name}, Your Achivements
      </p>
      <div className="flex justify-between gap-4 flex-wrap">
        <div className="shadow-lg bg-gray-50 w-80 py-10 border">
          <div className="flex items-center gap-5 justify-center">
            <i className="fa-solid fa-pen text-xl bg-green-500 w-12 h-12 flex items-center pt-3 rounded-full border-gray-500 pl-3 border-2"></i>
            <p className="text-2xl">SUBMISSIONS</p>
          </div>
          <p className="text-2xl text-center">10</p>
        </div>
        <div className="shadow-lg bg-gray-50 w-80 py-10 border">
          <div className="flex items-center gap-5 justify-center">
            <i className="fa-solid fa-crown text-xl bg-green-500 w-12 h-12 flex items-center pt-3 rounded-full border-gray-500 pl-3  border-2"></i>
            <p className="text-2xl">AWARDS</p>
          </div>
          <p className="text-2xl text-center">3</p>
        </div>
        <div className="shadow-lg bg-gray-50 w-80 py-10 border">
          <div className="flex items-center gap-5 justify-center">
            <i className="fa-solid fa-eye text-xl bg-green-500 w-12 h-12 flex items-center pt-3 rounded-full border-gray-500 pl-3  border-2"></i>
            <p className="text-2xl">ALL VIEWS</p>
          </div>
          <p className="text-2xl text-center">90</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;