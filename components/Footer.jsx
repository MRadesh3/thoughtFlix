import Image from "next/image";
import Link from "next/link";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { Fragment } from "react";

const Footer = () => {
  return (
    <Fragment>
      <section className="grid grid-cols-2 gap-8 w-full border-t-2 py-10 mt-10">
        <div className="max-lg:col-span-2">
          <Image
            src="/assets/images/thoughtflix.png"
            alt="logo"
            width={200}
            height={200}
            className="object-contain"
          />
          <p className="mt-5 text-slate-500">
            ThoughtFlix - Unleash inspiration with our curated thoughts and let
            your thoughts take center stage. Your daily dose of insightful
            moments awaits ...
          </p>
        </div>

        <div className="max-lg:col-span-2">
          <h1 className="text-slate-500 font-semibold text-lg">Get In Touch</h1>
          <div className="grid grid-cols-2 gap-4">
            <p className="mt-5 text-slate-500 max-md:col-span-2">
              <span className=" font-normal">
                <EmailIcon /> :{" "}
              </span>
              <a href="mailto:adeshsalsundar1713@gmail.com">
                adeshsalsundar1713@gmail.com
              </a>
            </p>
            <p className="mt-5 text-slate-500 max-md:col-span-2">
              <span className="font-normal">
                <LocalPhoneIcon /> :{" "}
              </span>
              <a href="tel:8080120538">+ 91 8080120538</a>
            </p>
            <div className="mt-5 text-slate-500 max-md:col-span-2">
              <div className="flex gap-9">
                <span className="font-normal">
                  <Link href="https://www.linkedin.com/in/adesh-salsundar-a73b4121a/">
                    <LinkedInIcon fontSize="large" />{" "}
                  </Link>
                </span>
                <span className="font-normal">
                  <Link href="https://github.com/MRadesh3">
                    <GitHubIcon fontSize="large" />{" "}
                  </Link>
                </span>

                <span className="font-normal">
                  <Link href="https://www.linkedin.com/in/adesh-salsundar-a73b4121a/">
                    <AccountCircleIcon fontSize="large" />{" "}
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 w-full" />
      <div className="pb-10">
        <p className="text-center text-slate-500">
          © {new Date().getFullYear()} ThoughtFlix. All rights reserved.
        </p>
      </div>
    </Fragment>
  );
};

export default Footer;
