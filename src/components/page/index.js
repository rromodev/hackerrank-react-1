import React  from "react";

export default function Page(
    props
) {

  return (
    <>
        <div className="card w-20 ma-0">
            <section className="card-text" data-testid="tab-content">
            <span>{props.title.toUpperCase()} PAGE</span>
            </section>
        </div>
    </>
  );
}

Page.defaultProps = {
    title: 'HOME'
}