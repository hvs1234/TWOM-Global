import { useDispatch, useSelector } from "react-redux";
import { setCounter, setPath, toggleNav } from "./Slice";
import { useCallback } from "react";
import { CountUp } from "countup.js";

const Handlers = () => {
  const dispatch = useDispatch();
  const navlinkdata = useSelector((state) => state.app.navlinkdata);
  const homeservicedata = useSelector((state) => state.app.homeservicedata);
  const homechoosedata = useSelector((state) => state.app.homechoosedata);
  const homestudioimg = useSelector((state) => state.app.homestudioimg);
  const serviceclientdata = useSelector((state) => state.app.serviceclientdata);
  const servicecarddata = useSelector((state) => state.app.servicecarddata);
  const isActive = useSelector((state) => state.app.isActive);
  const { counters } = useSelector((state) => state.app);

  const handleOnClick = useCallback(
    (path) => (e) => {
      e.preventDefault();
      dispatch(setPath(path));
      window.location.pathname = path;
    },
    [dispatch]
  );

  const toggleNavbar = useCallback(() => {
    dispatch(toggleNav());
  }, [dispatch]);

  const AnimateCounter = useCallback(
    (id, end) => {
      const counter = new CountUp(id, end, {
        suffix: "+",
      });
      if (!counter.error) {
        counter.start(() => {
          dispatch(setCounter({ id, value: end }));
        });
      } else {
        console.error(counter.error);
      }
    },
    [dispatch]
  );

  return {
    handleOnClick,
    navlinkdata,
    isActive,
    toggleNavbar,
    homeservicedata,
    homechoosedata,
    homestudioimg,
    serviceclientdata,
    servicecarddata,
    counters,
    AnimateCounter,
  };
};

export default Handlers;
