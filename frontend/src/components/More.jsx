import React from "react";
import { MdDesignServices } from "react-icons/md";
import "../styles/More.css";
import {
  FaChalkboardUser,
  FaHandHoldingDollar,
  FaRegCircleUser,
} from "react-icons/fa6";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { GrLineChart } from "react-icons/gr";

const heading = "Design & Development";
const content =
  "With flexible contract option and no setup fees,Hustle works for Schools of  all sizes";
const color1 = "purple";
const More = () => {
  return (
    <>
      <div className="conatiner_more" id="support">
        <h1>We Have What It Takes To Support Education </h1>
        <div className="all">
          <div className="info_card">
            <div className="icon">
              <MdDesignServices className="icon_main" />
            </div>
            <div className="info">
              <h4>{heading}</h4>
              <div className="content_more">
                <p>{content}</p>
              </div>
            </div>
          </div>
          <div className="info_card">
            <div className="icon">
              <FaHandHoldingDollar className="icon_main" />
            </div>
            <div className="info">
              <h4>Finance Management</h4>
              <div className="content_more">
                <p>{content}</p>
              </div>
            </div>
          </div>
          <div className="info_card pink">
            <div className="icon pink_icon">
              <FaRegCircleUser className="icon_main" />
            </div>
            <div className="info">
              <h4>Self Development</h4>
              <div className="content_more">
                <p>{content}</p>
              </div>
            </div>
          </div>
          <div className="info_card pink">
            <div className="icon pink_icon">
              <GrLineChart className="icon_main" />
            </div>
            <div className="info">
              <h4>Bussiness & Counsulting</h4>
              <div className="content_more">
                <p>{content}</p>
              </div>
            </div>
          </div>
          <div className="info_card yellow">
            <div className="icon yellow_icon">
              <IoChatbubbleEllipsesOutline className="icon_main" />
            </div>
            <div className="info">
              <h4>Communication</h4>
              <div className="content_more">
                <p>{content}</p>
              </div>
            </div>
          </div>
          <div className="info_card yellow">
            <div className="icon yellow_icon">
              <FaChalkboardUser className="icon_main" />
            </div>
            <div className="info">
              <h4>Digital Marketing</h4>
              <div className="content_more">
                <p>{content}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default More;
