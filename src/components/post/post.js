import React from "react";
import HeartMask from "../heartMask/heartMask";
import "./post.scss";

const propTypes = {};
const defaultProps = {};

const Post = () => (
  <div className="post">
    <HeartMask>
      <div className="lorem-lipsum">
        Consectetur laboris consequat culpa ad pariatur cupidatat laboris minim
        est adipisicing magna. Velit irure dolore velit consequat velit dolore
        veniam. Esse nostrud pariatur magna magna velit mollit Lorem non non
        fugiat nostrud sint aute irure. Amet pariatur eu esse aliqua cillum
        consectetur quis commodo esse occaecat labore consequat aute amet. Sunt
        velit magna laborum anim ad consectetur eu. Non sit ea laboris culpa
        dolore duis laboris ullamco cillum exercitation ad nostrud consequat
        dolor. Consectetur laboris consequat culpa ad pariatur cupidatat laboris
        minim est adipisicing magna. Velit irure dolore velit consequat velit
        dolore veniam. Esse nostrud pariatur magna magna velit mollit Lorem non
        non fugiat nostrud sint aute irure. Amet pariatur eu esse aliqua cillum
        consectetur quis commodo esse occaecat labore consequat aute amet. Sunt
        velit magna laborum anim ad consectetur eu. Non sit ea laboris culpa
        dolore duis laboris ullamco cillum exercitation ad nostrud consequat
        dolor. Consectetur laboris consequat culpa ad pariatur cupidatat laboris
        minim est adipisicing magna. Velit irure dolore velit consequat velit
        dolore veniam. Esse nostrud pariatur magna magna velit mollit Lorem non
        non fugiat nostrud sint aute irure. Amet pariatur eu esse aliqua cillum
        consectetur quis commodo esse occaecat labore consequat aute amet. Sunt
        velit magna laborum anim ad consectetur eu. Non sit ea laboris culpa
        dolore duis laboris ullamco cillum exercitation ad nostrud consequat
        dolor.
      </div>
    </HeartMask>
  </div>
);

Post.propTypes = propTypes;
Post.defaultProps = defaultProps;

export default Post;
