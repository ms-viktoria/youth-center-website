import React from "react";

interface User {
  name: string;
}

const UserIcons: React.FC<{ users: User[] }> = ({ users }) => {
  const maxVisible = 3;
  const visibleUsers = users.slice(0, maxVisible);
  const extraCount = users.length - maxVisible;

  const getInitials = (name: string) => {
    const parts = name.split(" ");
    const initials = parts.map((part) => part[0]).join("");
    return initials.toUpperCase();
  };

  const generateRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i <= 6; i++) {
      color += letters[Math.floor(Math.random() * letters.length)];
    }
    return color;
  };

  return (
    <div className="user-icons">
      {visibleUsers.map((user, index) => (
        <div
          key={index}
          className="user-icon"
          style={{ backgroundColor: generateRandomColor() }}
        >
          {getInitials(user.name)}
        </div>
      ))}
      {extraCount > 0 && <div className="user-icon extra">+{extraCount}</div>}
    </div>
  );
};

export default UserIcons;
