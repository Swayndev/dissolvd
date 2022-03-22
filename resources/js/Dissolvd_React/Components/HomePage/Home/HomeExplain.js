import React from "react";
import discuss from "../../../img/discuss.svg";
import watch from "../../../img/watch.svg";
import post from "../../../img/post.svg";

export const HomeExplain = () => {
  return (
    <div>
      {/* EXPLAIN */}
      <div className="explain">
        <div className="explain__watch" id="explain">
          <div className="explain__watch--text">
            <h3>Watch.</h3>
            <p>
              Before you can see what everyone else thought of a film (including
              it's ratings and reviews), first you must
              <strong>
                <i>watch</i>
              </strong>{" "}
              that film, because you should actually have to see something
              before having an opinion on it right?
            </p>
          </div>
          <div className="explain__watch--img">
            <img src={watch} alt="character watching a film" />
          </div>
        </div>
        <div className="explain__post">
          <div className="explain__post--text">
            <h3>Post.</h3>
            <p>
              Now that you've seen the film, you should
              <strong>
                <i>post</i>
              </strong>{" "}
              about it! You can leave a review, a rating or simply declare that
              you have seen it. It's up to you!
            </p>
          </div>
          <div className="explain__post--img">
            <img src={post} alt="character rating a film" />
          </div>
        </div>
        <div className="explain__discuss">
          <div className="explain__discuss--text">
            <h3>Discuss.</h3>
            <p>
              Now that you've seen, rated or given your thoughts, you're able to
              see other's opinions and thoughts, and can now participate in the
              discussion.
            </p>
          </div>
          <div className="explain__discuss--img">
            <img src={discuss} alt="characters discussing a film" />
          </div>
        </div>
      </div>
    </div>
  );
};
