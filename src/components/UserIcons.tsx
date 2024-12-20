import React from "react";

interface User {
  name: string;
}

const UserIcons: React.FC<{ users: User[] }> = ({ users }) => {
  const colors = ['#32a852', '#8c32a8', '#326fa8', '#a6a832', '#a84a32', '#a660a8', '#60a8a1', '#60a872', '#b9cc0c', '#a1056a','#34a352', '#8c62a8', '#526fb8', '#a6b882', ];
  const maxVisible = 3;
  const visibleUsers = users.slice(0, maxVisible);
  const extraCount = users.length - maxVisible;

  const getInitials = (name: string) => {
    const parts = name.split(" ");
    const initials = parts.map((part) => part[0]).join("");
    return initials.toUpperCase();
  };

  const getRandomColor = () => {
    const randomColor = Math.floor(Math.random() * colors.length);
    return colors[randomColor];
  }

  return (
    <div className="user-icons">
      {visibleUsers.map((user, index) => (
        <div
          key={index}
          className="user-icons__item"
          style={{ backgroundColor: getRandomColor() }}
        >
          {getInitials(user.name)}
        </div>
      ))}
      {extraCount > 0 && <div className="user-icons__item--extra">+{extraCount}</div>}
    </div>
  );
};

export default UserIcons;
