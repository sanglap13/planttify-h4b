import React, { useState } from "react";
import GroupCard from "../../shared/GroupCard";

interface Group {
  id: number;
  name: string;
  description: string;
  location: string;
  established: string;
  imageUrl: string;
}

const groups: Group[] = [
  {
    id: 1,
    name: "Group One",
    description: "This is the first group",
    location: "New York, USA",
    established: "2020",
    imageUrl: "https://via.placeholder.com/100",
  },
  {
    id: 2,
    name: "Group Two",
    description: "This is the second group",
    location: "Los Angeles, USA",
    established: "2019",
    imageUrl: "https://via.placeholder.com/100",
  },
  {
    id: 3,
    name: "Group Three",
    description: "This is the third group",
    location: "Chicago, USA",
    established: "2018",
    imageUrl: "https://via.placeholder.com/100",
  },
  {
    id: 4,
    name: "Group Four",
    description: "This is the fourth group",
    location: "San Francisco, USA",
    established: "2017",
    imageUrl: "https://via.placeholder.com/100",
  },
];

const Groups: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const filteredGroups = groups.filter((group) =>
    group.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4 md:p-8 mt-20">
      <input
        type="text"
        placeholder="Search groups..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-10 p-2 border rounded-lg w-full "
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredGroups.map((group) => (
          <GroupCard
            key={group.id}
            name={group.name}
            description={group.description}
            location={group.location}
            established={group.established}
            imageUrl={group.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Groups;
