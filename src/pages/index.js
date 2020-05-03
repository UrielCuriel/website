import React from "react";

import Layout from "../components/Layout";
import Typing from "../components/typing";
const Index = (props) => {
  return (
    <Layout>
      <header className="w-full h-screen bg-neutral-1000 grid items-center justify-center">
        <div>
          <h1 className="text-12xl text-neutral-600 font-thin">
            <span className="font-logo text-primary-500">{"{"}</span>
            <span className="text-primary-200">U</span>
            <span className="hidden lg:inline">riel</span>{" "}
            <span className="text-primary-200">C</span>
            <span className="hidden lg:inline">uriel</span>
            <span className="font-logo text-primary-500">{"}"}</span>
          </h1>
          <h2 className="text-neutral-700 text-4xl text-center">
            <small>
              {" "}
              <Typing
                items={["Life Hacker", "FullStack Developer", "IT Consultant"]}
              ></Typing>
            </small>
          </h2>
        </div>
      </header>
    </Layout>
  );
};

export default Index;
