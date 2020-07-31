import React, { useState } from "react";
import { useForm } from "react-hook-form";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import {
  Log,
  useCreateLogMutation,
  useGetLogsQuery,
} from "../../../graphql/generated";

const FORM_DATA = {
  title: "",
  description: "",
  image: "",
};
const Home = () => {
  const { data } = useGetLogsQuery();
  const [showPopup, setShowPopup] = useState<string | null>(null);
  const { handleSubmit, register } = useForm<typeof FORM_DATA>();
  const [createLog] = useCreateLogMutation();
  const [addLogPopup, setAddLogPopup] = useState({
    show: false,
    lat: 0,
    lon: 0,
  });
  const [viewport, setViewport] = useState({
    width: "100vw",
    height: "100vh",
    latitude: 23.241346000000007,
    longitude: 90.60424800000001,
    zoom: 5,
  });

  const logs: Log[] = data?.logs || [];

  return (
    <ReactMapGL
      {...viewport}
      doubleClickZoom={false}
      onViewportChange={(position) => {
        setViewport({
          ...viewport,
          latitude: position.latitude,
          longitude: position.longitude,
          zoom: position.zoom,
        });
      }}
      mapStyle="mapbox://styles/shifat/ck48m6mum0d9b1cmfw6ompyeo"
      mapboxApiAccessToken={process.env.REACT_APP_MAP_TOKEN || ""}
      onDblClick={(e) => {
        const latitude = e.lngLat[1];
        const longitude = e.lngLat[0];
        setAddLogPopup({ show: true, lat: latitude, lon: longitude });
      }}
    >
      {logs &&
        !!logs.length &&
        logs.map((log) => (
          <React.Fragment key={log.id}>
            <Marker latitude={+log.latitude} longitude={+log.longitude}>
              <svg
                viewBox="0 0 24 24"
                style={{
                  width: `calc(1vmin * ${viewport.zoom / 2})`,
                  height: `calc(1vmin * ${viewport.zoom / 2})`,
                  transform: "translate(-50%, -100%)",
                  cursor: "pointer",
                }}
                stroke="#f8c102"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                onClick={() => setShowPopup(log.id)}
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </Marker>
            {showPopup === log.id && (
              <Popup
                offsetTop={-25}
                dynamicPosition={true}
                closeOnClick={false}
                onClose={() => setShowPopup(null)}
                latitude={+log.latitude}
                longitude={+log.longitude}
              >
                <div>
                  <h3>{log.title}</h3>
                  {log.description && <p>{log.description}</p>}
                  <em>Visited: </em>{" "}
                  {new Date(+log.visitedDate * 1000).toLocaleDateString(
                    "en-US"
                  )}
                </div>
              </Popup>
            )}
            {addLogPopup.show && (
              <Popup
                offsetTop={-25}
                dynamicPosition={true}
                closeOnClick={false}
                onClose={() =>
                  setAddLogPopup({
                    show: false,
                    lat: 0,
                    lon: 0,
                  })
                }
                latitude={addLogPopup.lat}
                longitude={addLogPopup.lon}
              >
                <form
                  noValidate
                  onSubmit={handleSubmit((formData) => {
                    createLog({
                      variables: {
                        input: {
                          ...formData,
                          visitedDate: new Date().toISOString(),
                          latitude: addLogPopup.lat.toString(),
                          longitude: addLogPopup.lon.toString(),
                        },
                      },
                      refetchQueries: ["GetLogs"],
                      awaitRefetchQueries: true,
                    }).then((res) => {
                      setAddLogPopup({
                        show: false,
                        lat: 0,
                        lon: 0,
                      });
                      setShowPopup(res.data?.createLog.id || null);
                    });
                  })}
                >
                  <div className="form__group">
                    <label htmlFor="title"> Title:</label>
                    <input type="text" name="title" ref={register()} />
                  </div>
                  <div className="form__group">
                    <label htmlFor="description"> Description:</label>
                    <input type="text" name="description" ref={register()} />
                  </div>
                  <div className="form__group">
                    <label htmlFor="image"> Image:</label>
                    <input type="text" name="image" ref={register()} />
                  </div>

                  <button type="submit">Submit</button>
                </form>
              </Popup>
            )}
          </React.Fragment>
        ))}
    </ReactMapGL>
  );
};

export default Home;
