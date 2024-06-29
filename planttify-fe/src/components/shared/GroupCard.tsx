import React from "react";

interface GroupCardProps {
  name: string;
  description: string;
  location: string;
  established: string;
  imageUrl: string;
}

const GroupCard: React.FC<GroupCardProps> = ({
  name,
  description,
  location,
  established,
  imageUrl,
}) => {
  return (
    <div className="flex border p-4 rounded-lg shadow-md">
      <img
        src={imageUrl}
        alt={name}
        className="w-24 h-24 object-cover rounded-lg mr-4"
      />
      <div className="flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-bold">{name}</h2>
          <p className="text-gray-600">{description}</p>
        </div>
        <div className="text-gray-500 mt-2">
          <p>Location: {location}</p>
          <p>Established: {established}</p>
        </div>
      </div>
    </div>
  );
};

export default GroupCard;
