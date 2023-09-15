import React from "react";

export default function MainPage() {
  return (
    <div className="relative flex justify-center w-full bg-white">
      <div className="mx-auto max-w-7xl lg:px-8">
        <div className="flex flex-col justify-center px-4 py-10 lg:px-6">
         

          <h1 className="mt-8 max-w-5xl text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-6xl">
            "Welcome to the Heart of Indian Cuisine!"
          </h1>
          <div className="mt-10 flex max-w-max items-center space-x-2 rounded-full border p-2">
            <p className="text-xs font-medium md:text-sm">
              See Our Best Food Dishes
              <span className="ml-2 cursor-pointer font-bold">
                Tap Here &rarr;
              </span>
            </p>
          </div>
          <p className="mt-8 max-w-3xl text-lg text-gray-700">
            "Welcome to our vibrant world of Indian cuisine! Explore an enticing
            array of aromatic dishes, timeless recipes, and culinary traditions
            that will transport your taste buds to India's heart."
          </p>
        </div>
        <div className="rounded-lg bg-gray-200 p-4">
          <img
            className="aspect-[3/2] w-full rounded-lg bg-gray-50 object-cover lg:aspect-auto lg:h-[400px]"
            src="https://plus.unsplash.com/premium_photo-1670601440146-3b33dfcd7e17?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1lYWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
            // src=""
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
