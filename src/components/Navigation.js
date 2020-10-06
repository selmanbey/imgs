import React from "react";
import { connect } from "react-redux";
import { setPage } from "../redux/actions";

function Navigation({ page, setPage }) {
  return (
    <>
      <button onClick={() => setPage(page - 1)} disabled={page === 0}>
        Back
      </button>
      <button onClick={() => setPage(page + 1)}>Next</button>
    </>
  );
}

const mapStateToProps = (state) => ({ page: state.galleryPrefs.page });
const mapDispatchToProps = { setPage };

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
