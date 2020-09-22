import React, { useState, useEffect } from "react";
import { mailService } from "../../_services/mail.service";
import { Editor } from "@tinymce/tinymce-react";
import { TagsInput } from "../../_components";

import { inject, observer, useObserver } from "mobx-react";
import { StoreContext } from "../../index";

export function MailComposePageImpl(props) {
  const store = (window.store = React.useContext(StoreContext));

  const [to, setTo] = useState("");
  const [receivers, setReceivers] = useState([]);
  const [subject, setSubject] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = () => {
    console.log("submitted", { receivers, subject, text });
    mailService.createMail({ receivers, subject, text }).then((res) => {
      console.log(res.data);
      alert("Message successfully sent!");
      window.location.reload();
    });
  };

  const handleEditorChange = (content, editor) => {
    setText(content);
    console.log("Content was updated:", content);
  };

  const selectedTags = (tags) => {
    console.log(tags, "selected tags");
    setReceivers(tags);
  };
  useEffect(() => {
    console.log(store.emails.slice(), "props storage");
    setReceivers(store.emails.slice());
  }, []);

  return useObserver(() => (
    <div>
      <div className="content-wrapper">
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Compose</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active">Compose</li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        <section className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <div className="card card-primary card-outline">
                  <div className="card-header">
                    <h3 className="card-title">Compose New Message</h3>
                  </div>

                  <div className="card-body">
                    <div className="form-group">
                      {/* <input
                        className="form-control"
                        placeholder="To:"
                        value={to}
                        onChange={(e) => {
                          console.log(e.target.value);
                          setTo(e.target.value);
                        }}
                      /> */}

                      <TagsInput
                        selectedTags={selectedTags}
                        tags={
                          store.emails.length > 0
                            ? store.emails.slice()
                            : receivers
                        }
                      />
                    </div>
                    <div className="form-group">
                      <input
                        className="form-control"
                        placeholder="Subject:"
                        value={subject}
                        onChange={(e) => {
                          console.log(e.target.value);
                          setSubject(e.target.value);
                        }}
                      />
                    </div>
                    {/* <div className="form-group" style={{height: '300px'}}>
                     <textarea id = "compose-textarea" className="form-control" placeholder="Text" style={{height: '300px'}} value={text} onChange={(e)=>{console.log(e.target.value);setText(e.target.value)}}/>

                </div> */}

                    <div className="form-group">
                      <div className="form-group" style={{ height: "300px" }}>
                        <textarea
                          id="compose-textarea"
                          className="form-control"
                          placeholder="Text"
                          style={{ height: "300px" }}
                          value={text}
                          onChange={(e) => {
                            console.log(e.target.value);
                            setText(e.target.value);
                          }}
                        />
                      </div>
                      {/* <Editor
                        apiKey="5pqv76cgxilvt1jry7en8v9e6la3amm9ne0wy4f588k25nti"
                        initialValue="<p>Please type your message</p>"
                        init={{
                          height: 500,
                          menubar: true,
                          plugins: [
                            "advlist autolink lists link image charmap print preview hr anchor pagebreak",
                            "searchreplace wordcount visualblocks visualchars code fullscreen",
                            "insertdatetime media nonbreaking save table contextmenu directionality",
                            "emoticons template paste textcolor colorpicker textpattern",
                          ],
                          toolbar:
                            "insertfile undo redo | formatselect | bold italic backcolor | \
                        alignleft aligncenter alignright alignjustify | \
                        bullist numlist outdent indent | removeformat | help | link image",

                          // image_title:true,
                          automatic_uploads: false,
                          // paste_data_images: true,
                          file_picker_types: "file image media",
                          // image_uploadtab: true,
                          // images_upload_url: 'postAcceptor.php',
                          file_picker_callback: function (
                            callback,
                            value,
                            meta
                          ) {
                            // Provide file and text for the link dialog
                            if (meta.filetype == "file") {
                              callback("mypage.html", { text: "My text" });
                            }

                            // Provide image and alt text for the image dialog
                            if (meta.filetype == "image") {
                              var input = document.createElement("input");
                              input.setAttribute("type", "file");
                              input.setAttribute("accept", "image/*");
                              console.log("jkln", value);
                              input.onchange = function () {
                                console.log("chande");
                                var file = this.files[0];
                                var reader = new FileReader();
                                console.log(file);
                                // reader.onload = function () {
                                //     var id = 'blobid' + (new Date()).getTime();
                                //     var blobCache =  this.activeEditor.editorUpload.blobCache;
                                //     var base64 = reader.result.split(',')[1];
                                //     var blobInfo = blobCache.create(id, file, base64);
                                //     blobCache.add(blobInfo);

                                //     // call the callback and populate the Title field with the file name
                                //     //cb(blobInfo.blobUri(), { title: file.name });
                                // };
                                reader.readAsDataURL(file);
                              };
                              callback("myimage.jpg", { alt: "My alt text" });
                            }

                            // Provide alternative source and posted for the media dialog
                            if (meta.filetype == "media") {
                              callback("movie.mp4", {
                                source2: "alt.ogg",
                                poster: "image.jpg",
                              });
                            }
                          },
                          // file_picker_callback: function(callback, value, meta) {
                          //     var input = document.createElement('input');
                          //     input.setAttribute('type', 'file');
                          //     input.setAttribute('accept', 'image/*');

                          //     input.onchange = function() {
                          //     var file = this.files[0];
                          //     var reader = new FileReader();

                          //     reader.onload = function () {
                          //         var id = 'blobid' + (new Date()).getTime();
                          //         var blobCache =  this.activeEditor.editorUpload.blobCache;
                          //         var base64 = reader.result.split(',')[1];
                          //         var blobInfo = blobCache.create(id, file, base64);
                          //         blobCache.add(blobInfo);

                          //         // call the callback and populate the Title field with the file name
                          //         //cb(blobInfo.blobUri(), { title: file.name });
                          //     };
                          //     reader.readAsDataURL(file);
                          // }
                          // },
                        }}
                        onEditorChange={handleEditorChange}
                      /> */}
                    </div>
                  </div>

                  <div className="card-footer">
                    <div className="float-right">
                      <button
                        type="submit"
                        className="btn btn-primary"
                        onClick={handleSubmit}
                      >
                        <i
                          className="far fa-envelope"
                          onClick={handleSubmit}
                        ></i>{" "}
                        Send
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  ));
}
