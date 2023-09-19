import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Job from "./Job";
import { useDispatch, useSelector } from "react-redux";
import { getJobsAction, updateFiltersSearchAction } from "../redux/actions";

const MainSearch = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.jobs.content);
  const searchFilters = useSelector((state) => state.searchFilters);

  const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search=";

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(getJobsAction(baseEndpoint, query));
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateFiltersSearchAction({ ...searchFilters, [name]: value }));
  };

  return (
    <Container>
      <Row>
        <Col xs={10} className="d-flex flex-wrap align-items-center mx-auto my-3">
          <h1 className="display-1 me-auto">Remote Jobs Search</h1>
          <Button variant="outline-primary" onClick={() => navigate("/favourites")}>
            Go to Favourites
          </Button>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              value={query}
              onChange={handleChange}
              placeholder="Type and press Enter"
              required
            />
          </Form>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          <Form>
            <Form.Control
              type="text"
              name="tipo"
              placeholder="Tipo"
              value={searchFilters.tipo}
              onChange={handleFilterChange}
            />
            <Form.Control
              type="text"
              name="citta"
              placeholder="Citta"
              value={searchFilters.citta}
              onChange={handleFilterChange}
            />
            <Form.Control
              type="text"
              name="via"
              placeholder="Via"
              value={searchFilters.via}
              onChange={handleFilterChange}
            />
          </Form>
          {jobs.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default MainSearch;
