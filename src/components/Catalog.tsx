import React from "react";
import { Accordion } from "flowbite-react";

const Catalog = () => {
  return (
    <div className="w-11/12">
      <Accordion alwaysOpen={true}>
        <Accordion.Panel>
          <Accordion.Title className="text-xl font-bold text-blue-900">
            Main catalogue
          </Accordion.Title>
          <Accordion.Content>
            <p className=" text-gray-500 dark:text-gray-400 hover:text-red-700 ">
              <a
                href="https://www.bestbuy.ca/en-ca/category/best-buy-mobile/20001"
                target="blank"
              >
                Computers, Tablets, & Accessories
              </a>
            </p>
            <p className="text-gray-500 dark:text-gray-400 hover:text-red-700">
              <a
                href="https://www.bestbuy.ca/en-ca/category/computers-tablets/20006"
                target="blank"
              >
                Cell Phones and Accessories
              </a>
            </p>
            <p className="text-gray-500 dark:text-gray-400 hover:text-red-700">
              <a
                href="https://www.bestbuy.ca/en-ca/category/tv-home-theatre/20003"
                target="blank"
              >
                TV & Home Theatre
              </a>
            </p>
            <p className="text-gray-500 dark:text-gray-400 hover:text-red-700">
              <a
                href="https://www.bestbuy.ca/en-ca/category/audio/659699"
                target="blank"
              >
                Headphones, Speakers, & Audio
              </a>
            </p>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </div>
  );
};

export default Catalog;
