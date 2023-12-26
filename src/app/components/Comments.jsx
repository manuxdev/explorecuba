import React from "react";

const comments = [
  {
    name: "Olguita Ramos",
    photo: "",
    comment:
      "esse esse veniam irure exercitationesse esse veniam irure exercitationesse esse veniam irure exercitationesse esse veniam irure exercitationesse esse veniam irure exercitationesse esse veniam irure exercitation",
  },
  {
    name: "Machado Ramos",
    photo: "",
    comment:
      " aute magna ad eiusmod voluptateaute magna ad eiusmod voluptateesse esse veniam irure exercitationesse esse veniam irure exercitationesse esse veniam irure exercitationesse esse veniam irure exercitation",
  },
  {
    name: "Serigio Ortega",
    photo: "",
    comment:
      "laboris dolor voluptate tempor duislaboris dolor voluptate tempor duisesse esse veniam irure exercitationesse esse veniam irure exercitationesse esse veniam irure exercitationesse esse veniam irure exercitation",
  },
];

const Comments = () => {
  return (
    <section className=" h-auto md:pr-16 pr-0 mb-20">
      <div className="md:mt-0 mt-20">
        <div className="flex justify-center items-center flex-col text-center">
          <h2 className="font-bold text-3xl text-paleta-blue-900">
            Nuestros clientes opinan
          </h2>
          <p className="mt-3">
            Opiniones Opiniones Opiniones Opiniones Opiniones Opiniones
            Opiniones Opiniones
          </p>
          <div className="flex sm:flex-row flex-col items-center justify-around w-[90%] mt-12">
            {comments.map((com, index) => (
              <div
                key={index}
                className="  flex flex-col w-72 px-4 py-3 gap-2 rounded-xl mt-5 border-b border-r border-paleta-blue-900"
              >
                <div className="w-full text-end text-4xl">❕❕</div>
                <div className="flex">
                  <div className="h-14 w-14 bg-gradient-to-br from-paleta-blue-900 via-paleta-blue-900 to-paleta-blue-500  rounded-full"></div>
                  <div className="text-start ml-2">
                    {" "}
                    <h3 className="font-bold text-lg">{com.name}</h3>
                    <h3 className="">
                      ⭐⭐⭐⭐⭐ <strong>5.0</strong>
                    </h3>
                  </div>
                </div>
                <p className="text-start w-full">{com.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comments;
