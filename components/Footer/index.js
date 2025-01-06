import React from "react";
import Socials from "../Socials";
import Link from "next/link";
import Button from "../Button";

const Footer = ({}) => {
  return (
    <>
      <div className="mt-5 laptop:mt-40 p-2 laptop:p-0">
        <div>
          <h1 className="text-2xl text-bold">Contact.</h1>
          <div className="mt-4 mb-4">
            <h2 className="text-3xl tablet:text-4xl laptop:text-4xl laptopl:text-4xl text-bold mb-2">
              LET&apos;S CREATE SOMETHING GREAT
            </h2>
            <Button
              type="primary"
              classes="mt-5 pt-10 ml0"
              onClick={() => window.location.href = "mailto:helenawreford@live.com"}
            >
              Get in touch
            </Button>
            <div className="mt-10">
              <Socials />
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-sm text-bold mt-2 laptop:mt-10 p-2 laptop:p-0">
        Made with ❤ by{" "} Ben :) 
        {/* <Link href="https://zosa.co.uk">
          <a className="underline underline-offset-1">Zosa</a>
        </Link> */}
      </h1>
    </>
  );
};

export default Footer;
