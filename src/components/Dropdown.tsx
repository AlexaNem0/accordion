import React from "react";
import { Accordion } from "flowbite-react";

const Dropdown = () => {
  return (
    <div className="w-11/12">
      <Accordion alwaysOpen={true}>
        <Accordion.Panel>
          <Accordion.Title>Computers, Tablets, & Accessories</Accordion.Title>
          <Accordion.Content>
            <p className=" text-gray-500 dark:text-gray-400">
              <a href="/">Laptops and Macbook</a>
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              <a href="/">Desctops & iMac</a>
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              <a href="/">Monitors</a>
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              <a href="/">Tablets & iPad</a>
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>Cell Phones and Accessories</Accordion.Title>
          <Accordion.Content>
            <p className=" text-gray-500 dark:text-gray-400">
              <a href="/">Prepaid Phones</a>
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              <a href="/">Cell Phone Cases</a>
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              <a href="/">Screen Protectors</a>
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              <a href="/">Power Banks</a>
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>TV & Home Theatre</Accordion.Title>
          <Accordion.Content>
            <p className=" text-gray-500 dark:text-gray-400">
              <a href="/">Televisions</a>
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              <a href="/">Home Audio & Theatre</a>
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              <a href="/">Media streamers</a>
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              <a href="/">TV Antennas</a>
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>Headphones, Speakers, & Audio</Accordion.Title>
          <Accordion.Content>
            <p className=" text-gray-500 dark:text-gray-400">
              <a href="/">Headphones</a>
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              <a href="/">Party speakers</a>
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              <a href="/">Mp3 Players</a>
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              <a href="/">Sound bars</a>
            </p>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </div>
  );
};

export default Dropdown;
