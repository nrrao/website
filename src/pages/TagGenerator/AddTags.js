import React, { useState, useEffect, useContext } from "react";
import useStyles from "./styles.js";
import { TagGeneratorContext } from "../../context/tagGeneratorContext.js";
import vector from "./Vector.png";
//import DisplayNewTags from "./displayNewTags";
import clipboard from "./CopyToClipboard.png";
import AutoManualTags from "./autoManualTags";

const AddTags = () => {
  const classes = useStyles();
  const context = useContext(TagGeneratorContext);
  const [topicTags, setTopicTags] = useState([]);
  

  const [showAutoManualTag, setShowAutoManualTag] = useState(false);
  // const [showCreateTag, setShowCreateTag] = useState(true);
  // const [showButtonDiv, setShowButtonDiv] = useState(true);
  //const [showDisplayAdditionalButton, setShowDisplayAdditionalButton] = useState(true);
  // const [showDisplayNewTags, setShowDisplayNewTags] = useState(false);
  //const [projectTags, setProjectTags] = useState({ ptags: [""] });

  useEffect(() => {
    //make API calls
    fetch(
      `https://api.github.com/repos/${context.owner}/${context.repo}/topics`,
      {
        method: "GET",
        headers: {
          Accept: "application/vnd.github.mercy-preview+json",
        },
      }
    )
      .then((response) => {
        if (response.ok) {
          console.log(response);
          return response.json();
        } else {
          throw new Error("Something went wrong");
        }
      })
      .then((data) => {
        console.log(data.names);
        setTopicTags(data.names);
        //context.updateTopicTags(data.names);
      })
      .catch((error) => {
        console.log(error);

        context.updateError("The repository could not be found.");
        context.handleShowDisplayTags(false);
        context.handleBtnClick(false);
        context.handleSendRequest(false);
      });
  }, [context]);

  const combineTags = () => {
    // setProjectTags((prevState) => {
    //   return {
    //     ptags: ["civictechindex", ...prevState.ptags],
    //   };
    // });
    const ttags = [...topicTags];
    context.updateTopicTags(ttags);
    const dataCopyTags = [...context.additionalTags.atags];
    console.log(dataCopyTags);

    context.updateProjectTag(dataCopyTags);

    context.handleShowDisplayTags(false);
    // setShowCreateTag(false);
    // setShowButtonDiv(false);
    context.handleShowDisplayNewTags(true);
  };

  const resetTags = () => {
    context.resetAdditionalTags();
   
  };

  const resetForm = () => {
    context.updateOrgValue("","",false,false)
    context.updateProjectData("","")
    context.handleBtnClick(false);
    context.handleSendRequest(false)

  };

  const addTagQ = () => {
    return (
      <>
        <section className={classes.projectSection}>
          <p className={classes.question}>
            Do you want to add additional topic tags to increase your project
            visibility?
          </p>
          <label className={classes.labelYes}>
            <input
              type="radio"
              value="Yes"
              checked={context.queValue.option1 === "Yes"}
              onChange={() =>
                //setValue({ option1: "Yes", option2: "" })
                context.updateQueValue("yes", "")
              }
            />
            Yes
          </label>

          <label className={classes.labelNo}>
            <input
              type="radio"
              value="No"
              checked={context.queValue.option2 === "No"}
              onChange={() =>
                //setValue({ option1: "", option2: "No", showComponent: true, showOrgComponent:false })
                context.updateQueValue("", "No")
              }
            />
            No
          </label>
        </section>
      </>
    );
  };

  const createTags = () => {
    //console.log(context.projectTags.ptags);
    //const ptags = context.projectTags.ptags
    return (
      <div className={classes.projectOrg}>
        <p className={classes.pStyle}>
          What topic(s), cause(s), or civic issue(s) does your project address?
        </p>
        {context.additionalTags.atags.map((ptag, idx) => (
          <div className={classes.topicDiv}  key={idx}>
            <input
              className={classes.topicBox}
              placeholder="topic(s), cause(s), or civic issue(s) "
              value={ptag || ""}
              onChange={(e) => context.updateTag(e, idx)}
            />
            <button className={classes.plusButton} onClick={() => context.addTag()}>
              <img className={classes.vector} src={vector} alt="vector" />
            </button>
          </div>
        ))}
      </div>
    );
  };

  const buttonDiv = () => {
    return (
      <div className={classes.buttonDiv}>
        <button
          className={classes.generateButton}
          onClick={() => combineTags()}
        >
          Generate Tags
        </button>
        <button className={classes.resetButton} onClick={() => resetTags()}>Reset Tags</button>
        <button className={classes.resetFormButton} onClick={() => resetForm()}>Reset Form</button>
      </div>
    );
  };

  const noTags = () => {
    return (
      <div className={classes.projectOrg}>
        <p className={classes.pStyle}>
          There are currently no topic tags in your project’s repository.Add
          tags to increase your project visibility.
        </p>
      </div>
    );
  };

  const presentTags = () => {
    return (
      <div
        className={context.showDisplayTag ? classes.projectInfo : classes.hideButton}
      >
        <p className={classes.pStyle}>These are your repository's current topic tags:</p>
        <div className={classes.tagDiv}>
          <ul className={classes.tagUl}>
            {topicTags.map((topicTag, idx) => (
              
                <li className={classes.tagLi} key={idx}>
                  {topicTag}
                </li>
    
            ))}
          </ul>
        </div>
        {/* <p>Add additional tags to increase your project visibility.</p> */}
      </div>
    );
  };

  const displayTagArray = () => {
    console.log(topicTags.length)
    console.log(context.orgValue.option1)
    if (topicTags.length === 0 && context.orgValue.option1 === "Yes") {
      console.log("inside 0 and yes ")
      return (
        <>
          {noTags()}
          {addTagQ()}
        </>
      );
    }
    if (topicTags.length !== 0 && context.orgValue.option1 === "Yes") {
      console.log("inside not 0 and yes ")
      return (
        <>
          {presentTags()}
          {addTagQ()}
        </>
      );
    }
    if (topicTags.length === 0 && context.orgValue.option2 === "No") {
      console.log("inside 0 and no ")
      return (
        <>
          {noTags()}
          {createTags()}
          {buttonDiv()}
        </>
      );
    } else {
      console.log("inside not 0 and no ")
      return (
        <>
          {presentTags()}
          {createTags()}
          {buttonDiv()}
        </>
      );
    }
  };

  const addMoreTags = () => {
    //setShowCreateTag(true)
    context.resetAdditionalTags();
    context.handleShowDisplayTags(true);
    context.handleShowDisplayNewTags(false);
    // return(<div>{context.showDisplayTag ? <AddTags/> : null}</div>)
  };

  const displayAdditionalButton = () => {
    return (
      <div className={classes.buttonDiv}>
        <button
          className={classes.generateButton}
          onClick={() => addMoreTags()}
        >
          Add Additional Tags
        </button>
        <button className={classes.resetButton} onClick={() => resetTags()}>Reset Tags</button>
        <button className={classes.resetFormButton} onClick={() => resetForm()}>Reset Form</button>
        <div className={classes.adButtonDiv}>
        <button
          className={classes.generateButton}
          onClick={() => setShowAutoManualTag(true)}
        >
          Ready to add your tags
        </button>
        </div>
    
      </div>
    );
  };

  const displayNewTags = () => {
    return (
      <>
        <div className={classes.tagDivMain}>
          <p className={classes.pStyle}>Add these topics to your repository</p>
          <ul className={classes.tagUl}>
            {context.projectTags.map((tag, idx) => (
              <>
                <li className={classes.newTagLi} key={idx}>
                  {tag}
                </li>
                <img
                  className={classes.copyImg}
                  src={clipboard}
                  alt="clipboard"
                />
              </>
            ))}
          </ul>
        </div>
        {displayAdditionalButton()}
       
      </>
    );
  };

  // const handlePtags = () => {
  //   context.resetAdditionalTags()
  //   context.setShowDisplayTag(true);
  //   context.handleShowDisplayNewTags(false);
  // };

  return (
    <div>
      {context.showDisplayTag ? displayTagArray() : null}
      {context.showDisplayNewTags ? displayNewTags() : null}
      {showAutoManualTag ? <AutoManualTags/> : null}
      {/* {showCreateTag ? createTags() : null}
      {showButtonDiv ? buttonDiv() : null} */}
      {/* {context.showDisplayNewTags ? (
        <DisplayNewTags
          projectTags={projectTags}
          handlePtags={handlePtags}
        />
      ) : null} */}
    </div>
  );
};

export default AddTags;
