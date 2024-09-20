import React, { useContext, useEffect, useState } from "react";
import MoreRelatedFraud from "../MoreRelatedFraud/MoreRelatedFraud";
import { discoverDataContext } from "../../Context/ContextShares";
import { useLocation } from "react-router-dom";

export default function UserMorePosts() {
  const [data, setData] = useState([]);
  const location = useLocation();
  const { discoverData, setDiscoverData } = useContext(discoverDataContext);
  const [isPosteduserMorePosts, setIsPosteduserMorePosts] = useState([]);

  const fullPath = decodeURIComponent(location.pathname.split("/")[2]);

  useEffect(() => {
    const allUserData = discoverData.filter(
      (item) => item.reportedUser === fullPath
    );
    setIsPosteduserMorePosts(allUserData);
  }, [location]);

  return (
    <div className="flex">
      {isPosteduserMorePosts.length > 1 && (
        <MoreRelatedFraud isPosteduserMorePosts={isPosteduserMorePosts} userview={true}/>
      )}
    </div>
  );
}
