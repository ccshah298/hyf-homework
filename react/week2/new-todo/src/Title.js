import React, { useEffect, useState } from "react";

function Title() {
  const [time, setTime] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setTime((prev) => prev + 1);
    }, 1000);
  });

  return (
    <div>
      <h3>To do List</h3>
      <h4> spent time on this page : {time}</h4>
    </div>
  );
}

export default Title;