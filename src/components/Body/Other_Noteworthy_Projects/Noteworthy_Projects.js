import React, { useEffect, useState } from "react";
import axios from "axios";
import { Grid } from "@material-ui/core";
import Cards from "./Cards";
import Loading from "./Loading";

import { motion } from "framer-motion";

const Noteworthy_Projects = () => {
  const [data, setData] = useState(false);

  useEffect(() => {
    async function dataFetch() {
      const response = await axios.get(
        `http://localhost:1337/notewothy-projects`
      );
      setData(response.data);
    }

    dataFetch();
  }, []);

  return (
    <div className="noteworthy_projects">
      <div className="inner">
        <section>
          <div className="noteworthy_projects_header">
            <h2>Other Noteworthy Projects</h2>
          </div>
          <div className="details">
            <Grid className="card-grid" container spacing={3}>
              {!data ? (
                <Loading />
              ) : (
                data.map((m) => (
                  <Grid md={4} sm={6} xs={12} item>
                    <Cards data={m} />
                  </Grid>
                ))
              )}
            </Grid>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Noteworthy_Projects;
