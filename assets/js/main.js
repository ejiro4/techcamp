var host = "https://crowdvote.quantumcloud.ng";

function copyright() {
    $("div.copyright").html('Copyright &copy; 2024. CrowdVote');
}

function userMenu() {
    $(".user-setting-menu").html('<li><a href="profile.html"><i class="icon-user"></i>  My Profile</a></li><li><a href="settings.html"><i class="icon-settings"></i> Settings</a></li><li><a href="javaScript:logout();"><i class="icon-power"></i> Logout</a></li>');
}



function openSite() {
    //location.href =    "https://crowdvote.ng";
    var anchor = document.createElement('a');
    anchor.href = 'https://crowdvote.ng';
    anchor.target = "_blank";
    anchor.click();
}


function sidebarMenu() {
    $(".sidebar-menu").html('<li class="sidebar-header text-center"><!--<h6>&#128620 ::::: &#128622;</h6>--></li> <li> <a href="dashboard.html" class="waves-effect"> <i class="icon-grid text-gradient-secondary"></i> <span>Dashboard</span> </a> </li> <li> <a href="posts.html" class="waves-effect"> <i class="fa fa-commenting text-gradient-secondary"></i> <span>Posts</span> </a> <li> <a href="polls.html" class="waves-effect"> <i class="fa fa-bar-chart text-gradient-secondary"></i> <span>Polls</span> </a> </li> </li> <li> <a href="votes.html" class="waves-effect"> <i class="fa fa-houzz text-gradient-secondary"></i> <span>Votes</span> </a> </li> <li> <a href="complaints.html" class="waves-effect"> <i class="fa fa-gavel text-gradient-secondary"></i> <span>C2G Issues</span> </a> </li> <li> <a href="#" class="waves-effect"> <i class="icon-earphones-alt text-gradient-secondary"></i> <span>Support </span> </a> </li> <li class="dropdown-divider mb-1"></li> <button class="btn btn-gradient-ibiza w-80 js-textareacopybtn mt-2" onclick="copyCode()" style="width:150px;"><i class="zmdi zmdi-share"></i> Share & Invite</button> <button class="btn btn-gradient-ibiza w-80 js-textareacopybtn mt-2" onClick="openSite();" style="width:150px;"><i class="zmdi zmdi-globe"></i> Visit Website</button>');
}

function copyCode() {

    $("button.close").css("display", "block")
    $("#modal-animation-1").modal({ backdrop: 'static', keyboard: false });
    $("button.close").html('<span class="zmdi zmdi-close mr-3 mt-n1 float-right" ></span>');
    document.getElementById('ifm').src = 'share.html?u=' + localStorage.email;
    document.getElementById('ifm').height = "100px";

    document.getElementById("modal-title").innerHTML = "<i class='fa fa-share zmdi-hc-2x'></i> <strong>Share & Invite</strong>";

}


function otherNav() {
    $(".other-nav").html('<svg class=\"mt-n1 user-pointer\" width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#A0A0A0"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6.44784 7.96942C6.76219 5.14032 9.15349 3 12 3V3C14.8465 3 17.2378 5.14032 17.5522 7.96942L17.804 10.2356C17.8072 10.2645 17.8088 10.279 17.8104 10.2933C17.9394 11.4169 18.3051 12.5005 18.8836 13.4725C18.8909 13.4849 18.8984 13.4973 18.9133 13.5222L19.4914 14.4856C20.0159 15.3599 20.2782 15.797 20.2216 16.1559C20.1839 16.3946 20.061 16.6117 19.8757 16.7668C19.5971 17 19.0873 17 18.0678 17H5.93223C4.91268 17 4.40291 17 4.12434 16.7668C3.93897 16.6117 3.81609 16.3946 3.77841 16.1559C3.72179 15.797 3.98407 15.3599 4.50862 14.4856L5.08665 13.5222C5.10161 13.4973 5.10909 13.4849 5.11644 13.4725C5.69488 12.5005 6.06064 11.4169 6.18959 10.2933C6.19123 10.279 6.19283 10.2645 6.19604 10.2356L6.44784 7.96942Z" stroke="#A0A0A0" stroke-width="2"></path> <path d="M8 17C8 17.5253 8.10346 18.0454 8.30448 18.5307C8.5055 19.016 8.80014 19.457 9.17157 19.8284C9.54301 20.1999 9.98396 20.4945 10.4693 20.6955C10.9546 20.8965 11.4747 21 12 21C12.5253 21 13.0454 20.8965 13.5307 20.6955C14.016 20.4945 14.457 20.1999 14.8284 19.8284C15.1999 19.457 15.4945 19.016 15.6955 18.5307C15.8965 18.0454 16 17.5253 16 17" stroke="#A0A0A0" stroke-width="2" stroke-linecap="round"></path> </g></svg> <svg  class=\"ml-2 mt-n1 user-pointer\" width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#CCCCCC" stroke="#CCCCCC"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>wallet</title> <g id="页面-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Business" transform="translate(-1152.000000, 0.000000)" fill-rule="nonzero"> <g id="wallet_line" transform="translate(1152.000000, 0.000000)"> <path d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z" id="MingCute" fill-rule="nonzero"> </path> <path d="M19,4 C20.1046,4 21,4.89543 21,6 L21,8.26756 C21.5978,8.61337 22,9.25972 22,10 L22,14 C22,14.7403 21.5978,15.3866 21,15.7324 L21,18 C21,19.1046 20.1046,20 19,20 L5,20 C3.89543,20 3,19.1046 3,18 L3,6 C3,4.89543 3.89543,4 5,4 L19,4 Z M19,6 L5,6 L5,18 L19,18 L19,16 L15,16 C12.7909,16 11,14.2091 11,12 C11,9.85780364 12.6840051,8.10892107 14.800363,8.0048953 L15,8 L19,8 L19,6 Z M20,10 L15,10 C13.8954,10 13,10.8954 13,12 C13,13.1046 13.8954,14 15,14 L20,14 L20,10 Z M16,11 C16.5523,11 17,11.4477 17,12 C17,12.5523 16.5523,13 16,13 C15.4477,13 15,12.5523 15,12 C15,11.4477 15.4477,11 16,11 Z" id="形状" fill="#A0A0A0"> </path> </g> </g> </g> </g></svg><i class="fa fa-gear text-black-50 user-pointer ml-3 goto-settings" style="font-size:19px;"></i>')

    $(".goto-settings").click(function () {
        location.href = "settings.html";
    });

}



/////////// create post
function createPost() {

    var post = document.getElementById("report").value;
    var email = localStorage.email;
    var dir = localStorage.dir;
    var delay = 1000;

    $(".process_doc3").html('<i class="fa fa-spinner fa-spin"></i> ...sending');
    $.ajax({
        url: host + "/api/postCreate",
        type: "GET",
        dataType: 'jsonp',
        timeout: 5000,
        data: { email: email, post: post, dir: dir },
        success: function (data) {
            //console.log(data.msg);
            if (data.symbol > 0) {
                $(".process_doc3").html("Post");
                $("#postForm")[0].reset();
                //window.top.$("span.ti-close").click();
                setTimeout(function () { /*location.href=src;*/  closeFrame(); }, delay);

            } else {
                $(".process_doc3").html("<span class='alert alert-danger p-2'>" + data.msg + "</span>");

            }

        },
        error: function (request, status, err) {
            if (status == "timeout") {
                $(".process_doc3").html("<span class='alert alert-danger p-2'>Slow Network!</span>");

            } else {
                $(".process_doc3").html("<span class='alert alert-danger p-2'>Error connecting Server!</span>");

            }
        }
    });
    setTimeout(function () { $(".process_doc3").html("Post"); }, delay);
}



/////////// create comment
function createComment() {

    var comment = document.getElementById("report").value;
    var email = localStorage.email;
    var pid = localStorage.pid;
    var delay = 1000;

    $(".process_doc3").html('<i class="fa fa-spinner fa-spin"></i> ...sending');
    $.ajax({
        url: host + "/api/commentCreate",
        type: "GET",
        dataType: 'jsonp',
        timeout: 5000,
        data: { email: email, comment: comment, pid: pid },
        success: function (data) {
            //console.log(data.msg);
            if (data.symbol > 0) {
                $(".process_doc3").html("Comment");
                $("#postForm")[0].reset();
                //window.top.$("span.ti-close").click();
                //setTimeout(function(){ /*location.href=src;*/  closeFrame(); }, delay);	
                var details = $(".comment_details").html();
                details += "<h6>" + localStorage.ename + "</h6><span class='mt-n2'>" + comment + "</span>";
                $(".comment_details").html(details);



            } else {
                $(".process_doc3").html("<span class='alert alert-danger p-2'>" + data.msg + "</span>");

            }

        },
        error: function (request, status, err) {
            if (status == "timeout") {
                $(".process_doc3").html("<span class='alert alert-danger p-2'>Slow Network!</span>");

            } else {
                $(".process_doc3").html("<span class='alert alert-danger p-2'>Error connecting Server!</span>");

            }
        }
    });
    setTimeout(function () { $(".process_doc3").html("Comment"); }, delay);
}


/////////// create vote
function createVote() {

    var title = document.getElementById("title").value;
    var desn = document.getElementById("report").value;
    var type = document.getElementById("type").value;
    var cat = document.getElementById("cat").value;
    var start = document.getElementById("start-time").value;
    var end = document.getElementById("end-time").value;
    var results = document.getElementById("results").value;
    var email = localStorage.email;
    var banner = localStorage.dir;
    var delay = 1000;

    $(".process_doc3").html('<i class="fa fa-spinner fa-spin"></i> ...processing');
    $.ajax({
        url: host + "/api/voteCreate",
        type: "GET",
        dataType: 'jsonp',
        timeout: 5000,
        data: { email: email, title: title, desn: desn, start: start, end: end, results: results, banner: banner, type: type, cat: cat },
        success: function (data) {
            //console.log(data.msg);
            if (data.symbol > 0) {
                $(".process_doc3").html("Create Vote");
                $("#voteForm")[0].reset();
                //window.top.$("span.ti-close").click();
                closeFrame();

            } else {
                $(".process_doc3").html("<span class='alert alert-danger p-2'>" + data.msg + "</span>");
            }

        },
        error: function (request, status, err) {
            if (status == "timeout") {
                $(".process_doc3").html("<span class='alert alert-danger p-2'>Slow Network!</span>");

            } else {
                $(".process_doc3").html("<span class='alert alert-danger p-2'>Error connecting Server!</span>");

            }
        }
    });
    setTimeout(function () { $(".process_doc3").html("Create Vote"); }, delay);
}


/////////// update vote
function updateVote() {

    var title = document.getElementById("title").value;
    var desn = document.getElementById("report").value;
    var type = document.getElementById("type").value;
    var cat = document.getElementById("cat").value;
    var start = document.getElementById("start-time").value;
    var end = document.getElementById("end-time").value;
    var results = document.getElementById("results").value;
    var email = localStorage.email;
    var banner = localStorage.dir;
    var delay = 1000;


    $(".process_doc3").html('<i class="fa fa-spinner fa-spin"></i> ...processing');
    $.ajax({
        url: host + "/api/voteUpdate",
        type: "GET",
        dataType: 'jsonp',
        timeout: 5000,
        data: { email: email, title: title, desn: desn, start: start, end: end, results: results, banner: banner, cat: cat, type: type, vid: localStorage.vid },
        success: function (data) {
            //console.log(data.msg);
            if (data.symbol > 0) {
                $(".process_doc3").html("Create Vote");
                $("#voteForm")[0].reset();
                //window.top.$("span.ti-close").click();
                closeFrame();

            } else {
                $(".process_doc3").html("<span class='alert alert-danger p-2'>" + data.msg + "</span>");
            }

        },
        error: function (request, status, err) {
            if (status == "timeout") {
                $(".process_doc3").html("<span class='alert alert-danger p-2'>Slow Network!</span>");

            } else {
                $(".process_doc3").html("<span class='alert alert-danger p-2'>Error connecting Server!</span>");

            }
        }
    });
    setTimeout(function () { $(".process_doc3").html("Create Vote"); }, delay);
}






function deletePost(p) {

    var email = localStorage.email;
    var delay = 4000;
    //$(".upload-img-but").hide();			
    //$(".msg").html('<i class="fa fa-spinner fa-spin" style="font-size:24px"></i> ');	
    $.ajax({
        url: host + "/api/deletePost",
        type: "GET",
        dataType: 'jsonp',
        timeout: 50000,
        data: { email: email, pid: p },
        success: function (data) {
            //console.log(data.msg);
            if (data.symbol > 0) {

                $(".item-" + p).hide();

            } else {

                Lobibox.notify('default', {
                    size: 'mini',
                    position: 'center top',
                    msg: data.msg
                });
            }

        },
        error: function (request, status, err) {
            if (status == "timeout") {
                Lobibox.notify('default', {
                    size: 'mini',
                    position: 'center top',
                    msg: 'Slow Network!'
                });

            } else {
                Lobibox.notify('default', {
                    size: 'mini',
                    position: 'center top',
                    msg: 'Error connecting Server!'
                });

            }
        }
    });
    setTimeout(function () { }, delay);

}


function deleteOption() {

    var email = localStorage.email;
    var vid = localStorage.void;
    var delay = 4000;
    //$(".upload-img-but").hide();			
    //$(".msg").html('<i class="fa fa-spinner fa-spin" style="font-size:24px"></i> ');	
    $.ajax({
        url: host + "/api/deleteOption",
        type: "GET",
        dataType: 'jsonp',
        timeout: 50000,
        data: { email: email, vid: vid },
        success: function (data) {
            //console.log(data.msg);
            if (data.symbol > 0) {
                //parent.location.reload();
                window.parent.postMessage('reloadParent', '*');
                //$(".item-" + p).hide();

            } else {

                Lobibox.notify('default', {
                    size: 'mini',
                    position: 'center top',
                    msg: data.msg
                });
            }

        },
        error: function (request, status, err) {
            if (status == "timeout") {
                Lobibox.notify('default', {
                    size: 'mini',
                    position: 'center top',
                    msg: 'Slow Network!'
                });

            } else {
                Lobibox.notify('default', {
                    size: 'mini',
                    position: 'center top',
                    msg: 'Error connecting Server!'
                });

            }
        }
    });
    setTimeout(function () { }, delay);

}




///// show options
function showOptions() {
    //$("#bookingHistory").html('<i class="fa fa-spinner fa-spin"></i>');
    var email = localStorage.email;
    var vid = localStorage.voteid;
    var delay = 5000;
    $.ajax({
        url: host + "/api/optionsShow",
        type: "GET",
        dataType: 'jsonp',
        timeout: 50000,
        data: { email: email, vid: vid },
        success: function (data) {
            console.log(data);
            var jsonData;

            if (typeof data === 'string') {
                jsonData = JSON.parse(data.replace(/^[^{]*\(|\);$/g, ''));
            } else if (typeof data === 'object') {
                jsonData = data;
            } else {
                console.error("Unsupported data format");
                return;
            }

            var tableData = [];
            for (var i = 0; i < jsonData.void.length; i++) {
                tableData.push({
                    "void": jsonData.void[i] || '',
                    "vo_img": jsonData.vo_img[i] || '',
                    "vo_cat": jsonData.vo_cat[i] || '',
                    "vo_title": jsonData.vo_title[i] || '',
                    "vo_desn": jsonData.vo_desn[i] || '',
                    "score": jsonData.score[i] || '',
                    "pix": jsonData.pix[i] || ''
                });
            }

            console.log(tableData);
            var table = $('#default-datatable').DataTable({
                dom: 'lBfrtip',
                bFilter: false,
                bInfo: false,
                lengthChange: false,
                language: {
                    "emptyTable": "No options found!",
                    "info": "Showing _START_ to _END_ of _TOTAL_ Options",
                    "infoEmpty": "Showing 0 to 0 of 0 Options",
                    "infoFiltered": "(filtered from _MAX_ total Options)",
                    "loadingRecords": "Loading...",
                    "processing": "Loading...",
                    "lengthMenu": "Show _MENU_ Options",
                    "search": "Search Options:",
                },
                pageLength: 100,
                buttons: [

                ],
                data: tableData,
                columns: [
                    { data: 'void', title: 'ID' },
                    {
                        data: 'title',
                        "sClass": "left",
                        "mRender": function (data, type, full) {
                            console.log(localStorage.voteid)
                            var pixname = "";
                            if (full.pix) { pixname = host + "/options/" + localStorage.voteid + '/' + full.vo_img + '/' + full.pix; } else { pixname = "assets/images/profile_2.png"; }
                            return "<div class='card-body' style='float:left; margin-right: 10px; margin-left:0px; background-image:url(\"" + pixname + "\"); background-size:cover; background-position:center 25%; width:90px; height:100px; border-radius:9px; border:#8befef solid .6em;'></div><div style=' white-space:normal'><strong>Title:</strong>  " + full.vo_title + "<br><strong>Details:</strong>   " + full.vo_desn + "<br><strong>Category:</strong> " + full.vo_cat + "<div style='clear:both;'></div><button class='btn btn-inverse-dark text-success cursor-pointer edit-recipient mt-4' id='" + full.vo_img + "' style='width:140px;'><i class='fa fa-cog'></i> Edit </button><div style='clear: both;'></div><span> " + full.score + " Votes</span></div>";

                        },
                        title: "Vote Options",


                    },

                    /* { data: 'admid', title: "Admission ID" },
                    { data: 'phone', title: "Phone" },
                    { data: 'email', title: "Email" }, */
                    //{ data: 'img', title: "Pix" },									
                    //{ data: null }
                ],

                /* "columnDefs": [{ "targets": -1, "data": null, "defaultContent": "<button class='btn btn-primary cursor-pointer edit-recipient' style='width:80px;'><i class='fa fa-cog'></i> Edit </button>" }], */
                "scrollX": true,
                "paging": false,
                "ordering": true,
                "responsive": true,
                "aaSorting": [[0, "desc"]],
                "pagingType": "full_numbers"
            });


            table.column(0).visible(false);
            /* table.column(2).visible(false);
            table.column(3).visible(false);
            table.column(4).visible(false); */



            //table.column( 0 ).data().join('<button>Click!</button>');		        
            //$(".bname").html(data.result[0].bname+ " : " +data.result[0].bcode);
            //$("title").html(data.result[0].bname+ " : " +data.result[0].bcode);

            $('#default-datatable tbody').on('click', 'button.edit-recipient', function () {
                //var d = table.row(this).data();
                var c = table.row($(this).parents('tr')).data();
                localStorage.void = c.void;
                localStorage.dir = c.vo_img;

                //alert( 'You clicked on '+c.tid+'\'s row' );
                if (c) {
                    $("button.close").css("display", "block")
                    $("#modal-animation-1").modal({ backdrop: 'static', keyboard: false });
                    $("button.close").html('<span class="zmdi zmdi-close mr-3 mt-n1 float-right" ></span>');
                    document.getElementById('ifm').src = 'option_edit.html';
                    document.getElementById('ifm').height = "440px";

                    document.getElementById("modal-title").innerHTML = "<i class='icon-settings'></i> <strong>Edit Option</strong>";

                }
            });

            $('#default-datatable tbody').on('click', 'button.manage-bundle', function () {
                //var d = table.row(this).data();
                var c = table.row($(this).parents('tr')).data();
                //alert( 'You clicked on '+c.tid+'\'s row' );
                if (c) {
                    //alert( 'You clicked on '+c.bID+'\'s row' ); 

                    Lobibox.window({
                        title: '    <span style="margin-left:10px;">MANAGE BUNDLE</span>',
                        /*url: 'booking.html',*/
                        //companydetails.html
                        content: "<iframe id='ifm' class='ifm' src='recipients.html?bid=" + c.bid + "'   scrolling='no' frameborder='0' style=\"background:url('assets/images/ajax-loader.gif') center center no-repeat; width:100%; height:1200px\"></iframe>",
                        modal: true,
                        closeButton: true,
                        draggable: false,
                        showClass: 'fadeInRight',
                        hideClass: 'fadeOutRight',
                        beforeClose: function () {
                            //location.reload();
                        },
                        height: $(document).height(),
                        width: $(document).width()

                    });


                    //location.href = 'index.html?u='+c.bID;		  
                    //$("#modal-2").modal({backdrop: 'static', keyboard: false});  
                    //$('#modal-2').modal("show");

                }
            });

        }
    });
    //resizeFrame(); 
}

/////// get Vote cats
function getVoteCat() {

    //var staffid = document.getElementById("staffid").value;
    var email = localStorage.email;
    var vid = localStorage.vid;
    var delay = 6000;

    $(".msg").html('<i class="fa fa-spinner fa-spin" style="font-size:24px"></i> ');
    $.ajax({
        url: host + "/api/getVote",
        type: "GET",
        dataType: 'jsonp',
        timeout: 50000,
        data: { email: email, vid: vid },
        success: function (data) {
            //console.log(data.msg);
            if (data.symbol > 0) {

                $(".msg").html("");

                var commaSeparatedValues = data.result[0].cat;
                // Clear existing tags
                function populateSelectList(commaSeparatedValues) {
                    // Split the comma-separated string into an array
                    var valuesArray = commaSeparatedValues.split(',');

                    // Get the select element
                    var $selectList = $('#vo_cat');

                    // Clear existing options
                    $selectList.empty();

                    // Add the default option
                    $selectList.append($('<option>', {
                        value: '',
                        text: ' - Select Category - '
                    }));

                    // Populate the select list with options
                    $.each(valuesArray, function (index, value) {
                        $selectList.append($('<option>', {
                            value: value.trim(),
                            text: value.trim()
                        }));
                    });
                }

                // Example usage with a comma-separated string
                //var commaSeparatedValues = "President, Secretary, Treasurer, Vice President";
                populateSelectList(commaSeparatedValues);


                // Get the current page's path
                var currentPage = window.location.pathname;

                // Check if the current page is option_edit.html
                if (currentPage.includes('option_edit.html')) {
                    // Call the getOption function
                    getOption();
                }


            } else {

                $(".msg").html("<span class='alert alert-danger p-2'>" + data.msg + "</span>");
            }

        },
        error: function (request, status, err) {
            if (status == "timeout") {
                $(".msg").html("<span class='alert alert-danger p-2'>Slow Network!</span>");

            } else {
                $(".msg").html("<span class='alert alert-danger p-2'>Error connecting Server!</span>");

            }
        }
    });
    setTimeout(function () { $(".msg").html(''); }, delay);
}

/////// get Vote
function getVote() {

    //var staffid = document.getElementById("staffid").value;
    var email = localStorage.email;
    var vid = localStorage.vid;
    var delay = 6000;

    $(".msg").html('<i class="fa fa-spinner fa-spin" style="font-size:24px"></i> ');
    $.ajax({
        url: host + "/api/getVote",
        type: "GET",
        dataType: 'jsonp',
        timeout: 50000,
        data: { email: email, vid: vid },
        success: function (data) {
            //console.log(data.msg);
            if (data.symbol > 0) {

                $(".msg").html("");
                $("#title").val(data.result[0].title);
                $("#report").val(data.result[0].desn);
                $("#type").val(data.result[0].type);
                $("#cat").tagsinput(data.result[0].cat);
                // Clear existing tags
                $('#cat').tagsinput('removeAll');

                // Add new tags
                var categories = data.result[0].cat.split(',');
                categories.forEach(function (tag) {
                    $('#cat').tagsinput('add', tag);
                });

                $('#cat').trigger('change');
                $("#start-time").val(data.result[0].start);
                $("#end-time").val(data.result[0].end);
                $("#results").val(data.result[0].results);


            } else {

                $(".msg").html("<span class='alert alert-danger p-2'>" + data.msg + "</span>");
            }

        },
        error: function (request, status, err) {
            if (status == "timeout") {
                $(".msg").html("<span class='alert alert-danger p-2'>Slow Network!</span>");

            } else {
                $(".msg").html("<span class='alert alert-danger p-2'>Error connecting Server!</span>");

            }
        }
    });
    setTimeout(function () { $(".msg").html(''); }, delay);
}
/*

*/


/////// get Operations
function getOption() {

    //var staffid = document.getElementById("staffid").value;
    var email = localStorage.email;
    var vid = localStorage.void;
    var delay = 6000;

    $(".msg").html('<i class="fa fa-spinner fa-spin" style="font-size:24px"></i> ');
    $.ajax({
        url: host + "/api/getOption",
        type: "GET",
        dataType: 'jsonp',
        timeout: 50000,
        data: { email: email, vid: vid },
        success: function (data) {
            //console.log(data.msg);
            if (data.symbol > 0) {

                $(".msg").html("");

                $("#title").val(data.result[0].vo_title);
                $("#vo_cat").val(data.result[0].vo_cat);
                $("#desn").val(data.result[0].vo_desn);
                $("#vid").val(data.result[0].void);

            } else {

                $(".msg").html("<span class='alert alert-danger p-2'>" + data.msg + "</span>");
            }

        },
        error: function (request, status, err) {
            if (status == "timeout") {
                $(".msg").html("<span class='alert alert-danger p-2'>Slow Network!</span>");

            } else {
                $(".msg").html("<span class='alert alert-danger p-2'>Error connecting Server!</span>");

            }
        }
    });
    setTimeout(function () { $(".msg").html(''); }, delay);
}
/*

*/

//get posts
function getPosts() {

    //var dis = document.getElementById("range_01").value;			
    //var dist = dis.substring(0, dis.length - 2);

    if (localStorage.email && localStorage.email !== "") {

        var email = localStorage.email;

        $(".post_details").html('<i class="fa fa-spinner fa-spin" style=""></i> ');
        $.ajax({
            url: "https://crowdvote.quantumcloud.ng/api/getPosts/", //the page containing php script
            type: "GET", //request type,
            dataType: 'jsonp',
            timeout: 50000,
            data: { email: email },
            success: function (data) {

                /*$("#loading").hide();
                $('#loc-btn').show();
                $('.card').show();
                document.getElementById('response').innerHTML = data.status;*/
                $("#post_details").html('');
                var ccontent = "";
                $.each(data.pid, function (i, item) {
                    //$(".response").html('');	
                    var pixname = "";
                    var photoname = "";
                    var photocount = "";
                    var like = "Like";
                    var del = "";
                    //var comment = 0;
                    //$(".donor_details").width(data.pid[i].length*210);	
                    //$(".owl-stage").width(data.pid[i].length*320);
                    if (data.liked[i] > 0) {
                        var like = "<span style='color:blue'>&#10003;&nbsp;&nbsp;&nbsp;</span>";
                    }
                    if (data.mid[i] == localStorage.uid) {
                        del = "<a class=\"dropdown-item\" href=\"javascript:void();\" onclick=\"deletePost(" + data.pid[i] + ")\" >Delete</a>";
                    }
                    if (data.pix[i].length > 0) { pixname = "https://crowdvote.quantumcloud.ng/profile/" + data.mid[i] + '/' + data.pix[i]; } else { pixname = "assets/images/profile_2.png"; }
                    if (data.photo[i].length > 0) { photoname = "<img style=\"width:100%; border-radius:20px;\" src=\"https://crowdvote.quantumcloud.ng/uploads/" + data.mid[i] + '/' + data.dir[i] + '/' + data.photo[i] + "\" />" } else { photoname = ""; }
                    if (data.photocount[i] > 1) { photocount = "<span class='btn bg-white p-2 user-pointer mt-n3 border border-warning rounded-circle'>+" + (data.photocount[i] - 1) + "</span>" } else { photocount = ""; }
                    var created = "";
                    if (data.days[i] > 0) {
                        var timeunit = "day";
                        if (data.days[i] > 1) { timeunit = "days" };
                        created = data.days[i] + " " + timeunit;
                    } else if (data.days[i] == 0 && data.hrs[i] > 0) {
                        var timeunit = "hour";
                        if (data.hrs[i] > 1) { timeunit = "hours" };
                        created = data.hrs[i] + " " + timeunit;
                    } else if (data.hrs[i] == 0 && data.mins[i] > 0) {
                        var timeunit = "min";
                        if (data.mins[i] > 1) { timeunit = "mins" };
                        created = data.mins[i] + " " + timeunit;
                    } else {
                        var timeunit = "sec";
                        if (data.secs[i] > 1) { timeunit = "secs" };
                        created = data.secs[i] + " secs";
                    }

                    ccontent += "<div class=\"item-" + data.pid[i] + "\"><div class=\"card cat-card-hover w-100 d-block border-0 shadow-xss rounded-lg overflow-hidden mb-4\"> <div class=\"card-action mr-3  mt-3\"><div class=\"dropdown\"><a href=\"javascript:void();\" class=\"dropdown-toggle dropdown-toggle-nocaret\" data-toggle=\"dropdown\"><i class=\"icon-options-vertical\"></i></a><div class=\"dropdown-menu dropdown-menu-right\">" + del + "<a class=\"dropdown-item\" href=\"javascript:void();\">Report</a></div></div></div><div class=\"card-body d-block w-100 pl-4 pr-4 pb-4\"><figure class=\"avatar user-profile-inbox ml-auto mr-auto mb-0 float-left position-relative z-index-1\" style=\"margin-top:-10px;\"><img src=\"" + pixname + "\" alt=\"crowdvote member\" class=\"side-user-img float-right p-1 bg-white rounded-circle\"></figure><p class=\"fw-700 font-xsss mt-0 mb-1 float-left ml-2 mt-n1\"><strong>" + data.fname[i] + "</strong><br/><span style='font-size:11px; margin-top:-5px;'>" + created + "</span></p><div class=\"clearfix\"></div><p class=\"fw-500 font-xsssss text-grey-500 mt-0 mb-2 search-email\">" + data.post[i] + "</p><br/>" + photoname + "<br/>" + photocount + "</div><div class=\"card-footer\"><div style='float:left'><i class=\"fa fa-thumbs-o-up\" style='color: blue' aria-hidden=\"true\"></i> <span class='like-counter' id=\"likecounter-" + data.pid[i] + "\">" + data.likes[i] + "</span></div><div style='float:right'><span id=\"comment-" + data.pid[i] + "\">" + data.comments[i] + "</span> <i class=\"fa fa-comment-o\" style='color: blue' aria-hidden=\"true\"></i></div><hr style='margin-top:30px;'/><div style=' width: 100%;display: flex; justify-content: space-between; align-items: center;'><span class='user-pointer mr-3 like-count float-left' id=\"like-" + data.pid[i] + "\"><i class='icon-like'></i><span id=\"liketick-" + data.pid[i] + "\"> " + like + "</span></span> <span style='text-align: center;' class='user-pointer mr-3 comment' id=\"comment-" + data.pid[i] + "\"><i class='ti-comment'></i> Comment</span><span class='user-pointer mr-0 float-right'><i class='icon-action-redo'></i> Share</span></div></div></div></div>";

                });

                $("#post_details").html(ccontent);

                ///////Beginning of likes
                $(".like-count").click(function () {
                    var id = $(this).attr('id');
                    var nid = id.split('-')[1];
                    var likes = $("#likecounter-" + nid).html();
                    //alert(nid);
                    //alert(likes);
                    //$("#likecounter-"+nid).html('<i class="fa fa-spinner fa-spin"></i>');
                    $.ajax({
                        url: host + "/api/like",
                        type: "GET",
                        dataType: 'jsonp',
                        timeout: 50000,
                        data: { email: localStorage.email, pid: nid },
                        success: function (data) {
                            //console.log(data.result);	
                            if (data.symbol > 0) {

                                $("#likecounter-" + nid).html(parseInt(likes) + 1);
                                $("#liketick-" + nid).html(" <span style='color:blue'>&#10003;&nbsp;&nbsp;&nbsp;</span>");
                                //setTimeout(function(){ /*location.href=src;*/  closeFrame(); }, delay);				  		  

                            } else {

                                $("#likecounter-" + nid).html(parseInt(likes) - 1);
                                $("#liketick-" + nid).html(" Like");

                            }


                        }

                    });
                });
                ////////End of likes

                ///////Beginning of comment
                $(".comment").click(function () {
                    var id = $(this).attr('id');
                    var nid = id.split('-')[1];
                    localStorage.pid = nid;
                    //alert(localStorage.pid);
                    //var likes = $("#likecounter-"+nid).html();
                    //alert("Make comment on #"+nid);
                    $("#modal-animation-1").modal({ backdrop: 'static', keyboard: false });
                    $("button.close").html('<span class="zmdi zmdi-close mr-3 mt-n1 float-right" ></span>');
                    document.getElementById('ifm').src = 'comment.html?u=' + localStorage.email + 'p=' + nid;
                    document.getElementById('ifm').height = "460px";

                    document.getElementById("modal-title").innerHTML = "<i class='icon-bubble zmdi-hc-2x'></i> <strong>Make Comment</strong>";


                    $('#modal-animation-1').on('hidden.bs.modal', function () {
                        if (localStorage.pid) {
                            //alert("ok");
                            $.ajax({
                                url: host + "/api/commentsCount",
                                type: "GET",
                                dataType: 'jsonp',
                                timeout: 5000,
                                data: {
                                    email: localStorage.email, pid: localStorage.pid
                                },
                                success: function (data) {
                                    //console.log(data.msg);
                                    if (data.symbol > 0) {
                                        $("#comment-" + nid).html(data.count);

                                    } else {


                                    }

                                },
                                error: function (request, status, err) {
                                    if (status == "timeout") {
                                        //$(".msg").html("<div class ='alert alert-danger p-1'><i class='fa fa-spinner fa-spin'></i> Slow Network!</div>");

                                    } else {
                                        //$(".msg").html("<div class ='alert alert-danger p-1'><i class='fa fa-spinner fa-spin'></i> Error connecting Server!</div>");

                                    }
                                }
                            });

                        }
                    });

                });
                ////////End of comment

            }
        });


    } else {
        $(".post_details").html('<div class ="alert alert-danger p-2"><i class="fa fa-warning"></i> Connection error!</div>');
        //setTimeout(function(){ $(".result").html(''); }, 5000);
    }

}


//get comments
function getComments() {

    //var dis = document.getElementById("range_01").value;			
    //var dist = dis.substring(0, dis.length - 2);

    if (localStorage.email && localStorage.email !== "") {

        var email = localStorage.email;
        var pid = localStorage.pid;
        $(".comment_details").html('<i class="fa fa-spinner fa-spin" style=""></i> ');
        $.ajax({
            url: "https://crowdvote.quantumcloud.ng/api/getComments/", //the page containing php script
            type: "GET", //request type,
            dataType: 'jsonp',
            timeout: 50000,
            data: { email: email, pid: pid },
            success: function (data) {

                /*$("#loading").hide();
                $('#loc-btn').show();
                $('.card').show();
                document.getElementById('response').innerHTML = data.status;*/
                $("#comment_details").html('');
                var ccontent = "";
                $.each(data.cid, function (i, item) {
                    //$(".response").html('');	


                    ccontent += "<div class=\"item-" + data.cid[i] + "\"><div class=\"card cat-card-hover w-100 d-block border-0 shadow-xss rounded-lg overflow-hidden mb-1\"> <div class=\"card-action mr-3  mt-1\"><div class=\"dropdown\"><a href=\"javascript:void();\" class=\"dropdown-toggle dropdown-toggle-nocaret\" data-toggle=\"dropdown\"><i class=\"icon-options-vertical\"></i></a></div></div><div class=\"card-body d-block w-100 pl-4 pr-4 pb-4\"><p class=\"fw-700 font-xsss mt-0 mb-1 float-left ml-0 mt-n1\"><strong>" + data.fname[i] + "</strong><br/></p><div class=\"clearfix\"></div><p class=\"fw-500 font-xsssss text-grey-500  mb-2 search-email\">" + data.comment[i] + "</p></div></div></div>";

                });

                $("#comment_details").html(ccontent);



            }
        });


    } else {
        $(".comment_details").html('<div class ="alert alert-danger p-2"><i class="fa fa-warning"></i> Connection error!</div>');
        //setTimeout(function(){ $(".result").html(''); }, 5000);
    }

}


///////////// getVotes
function getVotes() {

    //$("#bookingHistory").html('<i class="fa fa-spinner fa-spin"></i>');
    $.ajax({
        url: host + "/api/getVotes",
        type: "GET",
        dataType: 'jsonp',
        timeout: 50000,
        data: { email: localStorage.email },
        success: function (data) {
            console.log(data.result);
            var table = $('#default-datatable').DataTable({
                data: data.result,
                language: {
                    "emptyTable": "No platform found!",
                    "info": "Showing _START_ to _END_ of _TOTAL_ Platforms",
                    "infoEmpty": "Showing 0 to 0 of 0 Platforms",
                    "infoFiltered": "(filtered from _MAX_ total Platforms)",
                    "loadingRecords": "Loading...",
                    "processing": "Loading...",
                    "lengthMenu": "Show _MENU_ Platforms",
                    "search": "",
                },
                select: true,
                responsive: true,
                lengthChange: false,
                //bLengthChange: false,
                bFilter: true,
                bInfo: true,
                pageLength: 50,
                scrollX: true,
                columns: [
                    { data: 'vid', title: 'VID', },
                    {
                        data: 'title',
                        "class": "",
                        "mRender": function (data, type, full) {

                            return "<div class='wrap-text'> <i class='fa fa-gear'></i> " + full.title + "<br/><i class='fa fa-calendar-check-o'></i> <span style='font-size:10px'>" + full.start + "</span><br/><i class='fa fa-calendar-times-o'></i> <span style='font-size:10px'>" + full.end + "</span><div style='clear:both;'></div><button class='mt-1 mb-1 ml-0 btn btn-success update' style='width:106px'>Update</button><button class='mt-1 mb-1 ml-2 pl-3 btn btn-secondary view' style='width:47px'><i class='fa fa-eye'></i></button></div><br/><button class='btn btn-inverse-dark  bid-details text-success manage mt-n3' style='width:184px'><i class='fa fa-gear'></i> Manage Platform</button> <!-- <button class='btn btn-inverse-dark  bid-details text-success share mt-n3 ml-2' style='width:100px'><i class='fa fa-share'></i> Share </button>-->";

                        },
                        title: "<i class='fa fa-houzz'></i> Platforms"
                    },
                    //{ data: 'status', title: 'Status' },
                    // { data: 'type', title: 'Type' },	
                    //{ data: 'cat', title: 'Category' },
                    //{ data: null, "class":"card card-container"}
                ],
                "columnDefs": [
                    { "width": "80%", "targets": 1 }
                ],
                initComplete: function () {
                    // Add placeholder text to the search input
                    var searchInput = $('.dataTables_filter input');
                    searchInput.attr('placeholder', 'Search platforms...');
                },
                "scrollX": true,
                "paging": true,
                "ordering": true,
                "responsive": true,
                "aaSorting": [[0, "desc"]],
                "pagingType": "full_numbers"
            }
            );




            table.column(0).visible(false);
            //table.column( 0 ).data().join('<button>Click!</button>');


            $('#default-datatable tbody').on('click', 'button.manage', function () {
                //var d = table.row(this).data();			
                var c = table.row($(this).parents('tr')).data();
                localStorage.voteid = c.vid;
                //alert( 'You clicked on '+c.tid+'\'s row' );
                //location.href = "managevotes.html?v="+c.vid+"";	
                if (localStorage.voteid) {
                    location.href = "manage-votes.html";
                }
            });


            $('#default-datatable tbody').on('click', 'button.view', function () {
                //var d = table.row(this).data();			
                var c = table.row($(this).parents('tr')).data();
                localStorage.vid = c.vid;
                //alert( 'You clicked on '+c.tid+'\'s row' );
                //location.href = "managevotes.html?v="+c.vid+"";	
                if (localStorage.vid) {
                    var voteurl = "https://vote.crowdvote.ng/?p=" + localStorage.vid + "&id=" + Math.floor(Math.random() * 9000000) + 1000000;
                    window.open(voteurl, '_blank');
                }
            });

            $('#default-datatable tbody').on('click', 'button.update', function () {
                //document.getElementById('profileDetails').src = 'add-property.html?p=' + $(this).attr('data-id');
                //document.getElementById('profileDetails').height = "480px";
                //event.target.id
                //$("img.sketch").show();	
                //$(".profileDetails").hide();
                //document.getElementById("sketch").src = "images_body/"+$(this).attr('data-id')+".png";	
                //document.getElementById("modal-title").innerHTML = $(this).attr('data-id').toUpperCase(); 
                //delete localStorage.dir;
                //delete localStorage.report;
                //delete localStorage.cpg;

                var c = table.row($(this).parents('tr')).data();
                localStorage.dir = c.banner;
                localStorage.vid = c.vid;

                $("button.close").css("display", "block")
                $("#modal-animation-1").modal({ backdrop: 'static', keyboard: false });
                $("button.close").html('<span class="zmdi zmdi-close mr-3 mt-n1 float-right" ></span>');
                document.getElementById('ifm').src = 'vote-update.html?u=' + localStorage.email;
                document.getElementById('ifm').height = "520px";
                document.getElementById("modal-title").innerHTML = "<i class='fa fa-houzz'></i> <strong>Update Voting Platform</strong>";
            });



        }


    });

}

/////////// add option
function addOption() {


    var email = localStorage.email;
    var vid = localStorage.voteid;
    var delay = 5000;


    $(".process_doc").html(' ...processing');
    $.ajax({
        url: host + "/api/optionAdd",
        type: "GET",
        dataType: 'jsonp',
        timeout: 5000,
        data: {
            email: email,
            vid: vid,
            dir: localStorage.dir,
            title: $('#title').val(),
            cat: $('#vo_cat').val(),
            desn: $('#desn').val(),
        },
        success: function (data) {
            //console.log(data.msg);
            if (data.symbol > 0) {
                $(".process_doc").html("Add Option");
                $(".msg").html("<div class ='alert alert-success p-1'><i class='fa fa-spinner fa-spin'></i> " + data.msg + "</div>");
                $("#rForm")[0].reset();
                getImgParams("option-banner"); /////call it to get a fresh dir id
                //window.top.$("span.ti-close").click();
                //setTimeout(function(){ /*location.href=src;*/  closeFrame(); }, delay);				  		  

            } else {
                $(".msg").html("<div class ='alert alert-danger p-1'><i class='fa fa-spinner fa-spin'></i> " + data.msg + "</div>");

            }

        },
        error: function (request, status, err) {
            if (status == "timeout") {
                $(".msg").html("<div class ='alert alert-danger p-1'><i class='fa fa-spinner fa-spin'></i> Slow Network!</div>");

            } else {
                $(".msg").html("<div class ='alert alert-danger p-1'><i class='fa fa-spinner fa-spin'></i> Error connecting Server!</div>");

            }
        }
    });
    setTimeout(function () { $(".process_doc").html("Add Option"); $(".msg").html(''); }, delay);
}

/*
	
*/
/////////// update option
function updateOption() {


    var email = localStorage.email;
    var vid = localStorage.void;
    //var vo_title = document.getElementById("title").value;
    //var vo_desn = document.getElementById("desn").value;
    var delay = 5000;


    $(".process_doc").html(' ...processing');
    $.ajax({
        url: host + "/api/optionUpdate",
        type: "GET",
        dataType: 'jsonp',
        timeout: 5000,
        data: {
            email: email,
            vid: vid,
            vo_title: $('#title').val(),
            vo_cat: $('#vo_cat').val(),
            vo_desn: $('#desn').val(),
        },
        success: function (data) {
            //console.log(data.msg);
            if (data.symbol > 0) {
                $(".process_doc").html("Update Option");
                $(".msg").html("<div class ='alert alert-success p-1'><i class='fa fa-spinner fa-spin'></i> " + data.msg + "</div>");
                //$("#rForm")[0].reset();
                //getImgParams("option-banner"); /////call it to get a fresh dir id
                //window.top.$("span.ti-close").click();
                //setTimeout(function(){ /*location.href=src;*/  closeFrame(); }, delay);				  		  

            } else {
                $(".msg").html("<div class ='alert alert-danger p-1'><i class='fa fa-spinner fa-spin'></i> " + data.msg + "</div>");

            }

        },
        error: function (request, status, err) {
            if (status == "timeout") {
                $(".msg").html("<div class ='alert alert-danger p-1'><i class='fa fa-spinner fa-spin'></i> Slow Network!</div>");

            } else {
                $(".msg").html("<div class ='alert alert-danger p-1'><i class='fa fa-spinner fa-spin'></i> Error connecting Server!</div>");

            }
        }
    });
    setTimeout(function () { $(".process_doc").html("Update Option"); $(".msg").html(''); }, delay);
}

/*
	
*/

/////////// Post Vote Modal

function postVotesModal() {
    //alert( 'You clicked on '+c.bID+'\'s row' );
    var l = "";
    Lobibox.window({
        title: '    <span style="margin-left:10px;">POST LOAD</span>',
        /*url: 'booking.html',*/
        content: "<iframe id=\"ifm\" class=\"ifm\" src='post-load.html?l=" + l + "' height=\"1135px\"  scrolling=\"no\" frameborder=\"0\" style=\"background:url('assets/images/ajax-loader.gif') center center no-repeat; width:100%;\"></iframe>",
        modal: true,
        closeButton: true,
        draggable: false,
        showClass: 'fadeInRight',
        hideClass: 'fadeOutRight',
        beforeClose: function () {
            //location.reload();
            var table = $('#default-datatable').DataTable();
            table.clear().draw();
            ////////
            $.ajax({
                url: "https://movingjobs.quantumcloud.ng/api/loadboardLoads/",
                type: "GET",
                dataType: 'jsonp',
                timeout: 50000,
                data: { email: localStorage.email },
                success: function (data) {
                    console.log(data.result);
                    table.rows.add(data.result).draw(false);

                }
            });

            ////////
        },
        height: $(document).height(),
        width: $(document).width()

    });


    //location.href = 'index.html?u='+c.bID;		  
    //$("#modal-2").modal({backdrop: 'static', keyboard: false});  
    //$('#modal-2').modal("show");

}
/*

*/
/////// get image params where p is the page call
function getImgParams(p) {

    var email = localStorage.email;
    var delay = 4000;
    //$(".upload-img-but").hide();			
    //$(".msg").html('<i class="fa fa-spinner fa-spin" style="font-size:24px"></i> ');	
    $.ajax({
        url: host + "/api/imgParams",
        type: "GET",
        dataType: 'jsonp',
        timeout: 50000,
        data: { email: email },
        success: function (data) {
            //console.log(data.msg);
            if (data.symbol > 0) {
                localStorage.uid = data.uid;
                localStorage.dir = data.dir;
                document.getElementById('ifmimg').src = p + '.html?u=' + localStorage.email;
                document.getElementById('ifmimg').height = "560px";
                //alert(localStorage.uid + " - " + localStorage.dir);				    
                //$(".upload-img-but").show();	


            } else {

                Lobibox.notify('default', {
                    size: 'mini',
                    position: 'center top',
                    msg: data.msg
                });
            }

        },
        error: function (request, status, err) {
            if (status == "timeout") {
                Lobibox.notify('default', {
                    size: 'mini',
                    position: 'center top',
                    msg: 'Slow Network!'
                });

            } else {
                Lobibox.notify('default', {
                    size: 'mini',
                    position: 'center top',
                    msg: 'Error connecting Server!'
                });

            }
        }
    });
    setTimeout(function () { }, delay);
}


/////get polls
function getPolls() {

    //var dis = document.getElementById("range_01").value;			
    //var dist = dis.substring(0, dis.length - 2);

    if (localStorage.email && localStorage.email !== "") {

        var email = localStorage.email;

        $(".poll-list").html('<i class="fa fa-spinner fa-spin" style=""></i> ');
        $.ajax({
            url: "https://crowdvote.quantumcloud.ng/api/getPolls/", //the page containing php script
            type: "GET", //request type,
            dataType: 'jsonp',
            timeout: 50000,
            data: { email: email },
            success: function (data) {

                /*$("#loading").hide();
                $('#loc-btn').show();
                $('.card').show();
                document.getElementById('response').innerHTML = data.status;*/
                $(".poll-list").html('');
                var ccontent = "";

                $.each(data.pid, function (i, item) {
                    //$(".response").html('');	
                    var pixname = "";
                    var votecount = "";
                    var voted = "";
                    var acontent = "";
                    var bcontent = "";


                    //alert(data.pollOptions[i][0].sid);
                    //alert("pollid = "+data.pid[i]);
                    //alert(parseInt(data.totalscore[i]));
                    var totalscore = 0;
                    $.each(data.pollOptions[i], function (j, item) {
                        //alert(data.pollOptions[i][j].sid);

                        totalscore += parseInt(data.pollOptions[i][j].score);
                        percentage = ((parseInt(data.pollOptions[i][j].score) / parseInt(data.totalscore[i])) * 100).toFixed(1);
                        acontent += "<div class=\"options-" + data.pid[i] + " icheck-material-info icheck-inline w-100\"> <div class=\"progress my-1\" style=\"height:5px;\"><div class=\"progress-bar bg-primary progress-bar-striped progress-bar-animated\" style=\"width:" + percentage + "%\"></div> </div> <span class=\"badge badge-pill badge-info shadow-info m-1 mr-n3\">" + percentage + "%</span> <label for=\"inline-radio-info-" + data.pollOptions[i][j].poid + "\" class=\"text-white\">" + data.pollOptions[i][j].poll_options + "</label></div><br>";
                        bcontent += "<div class=\"options-" + data.pid[i] + " icheck-material-info icheck-inline\"><input type=\"radio\" id=\"inline-radio-info-" + data.pollOptions[i][j].poid + "\" name=\"inlineradio-" + data.pid[i] + "\" class=\"inlineradio-" + data.pid[i] + "\" value=\"" + data.pollOptions[i][j].poid + "\" onclick=\"getVote(this.value)\"> <label for=\"inline-radio-info-" + data.pollOptions[i][j].poid + "\" class=\"text-white\">" + data.pollOptions[i][j].poll_options + "</label></div><br>";

                    });

                    if (data.pix[i].length > 0) { pixname = "https://crowdvote.quantumcloud.ng/polls/" + data.pid[i] + '/' + data.pix[i]; } else { pixname = "assets/images/bg3.jpg"; }

                    if (data.voted[i] > 0) { voted = "<span class=\"float-right btn btn-gradient-success  pt-1 pb-1 pl-3 pr-3 vote-button-" + data.pid[i] + "\">Voted <i class=\"zmdi zmdi-badge-check\"></i></span>"; } else {
                        voted = "<span onclick=\"sendVote(" + data.pid[i] + ")\" class=\"float-right btn btn-gradient-info  user-pointer pt-1 pb-1 pl-3 pr-3 vote-button-" + data.pid[i] + "\">Vote <i class=\"zmdi zmdi-badge-check\"></i></span>";
                    }

                    ccontent += "<div class=\"col-12 col-lg-6 col-xl-6\"><div class=\"card gradient-ibiza\"> <img src=\"" + pixname + "\"class=\"card-img-top\" alt=\"Poll\"> <div class=\"card-body\"> <h4 class=\"card-title text-white\">" + data.title[i] + "</h4><span class=\"poll-options-" + data.pid[i] + "\" style='display:block;'>" + bcontent + "</span><span class=\"poll-results-" + data.pid[i] + "\" style='display:none;'>" + acontent + "</span><div class=\"text-white mb-0\"><span class=\"poll-date mt-3 text-white-50 text-nowrap\">Created: " + data.created[i] + "</span><span class=\"msg-" + data.pid[i] + " p-1 pl-2 pr-2 text-nowrap ml-2 rounded\"></span>" + voted + "</div> <div class=\"progress my-3\" style=\"height:3px;\"><div class=\"progress-bar\" style=\"width:100%\"></div></div><p class=\"mb-0 text-white small-font\">Total Votes: " + totalscore + "<span class=\"float-right pb-1 pl-3 pr-3 user-pointer togglePoll" + data.pid[i] + "\" onclick=\"togglePoll(" + data.pid[i] + ")\" >View Results <i class=\"zmdi zmdi-check-circle\"></i></span></p> </div></div></div>";



                });


                $(".poll-list").html(ccontent);



            }


        });


    } else {
        $(".poll-list").html('<div class ="alert alert-danger p-2"><i class="fa fa-warning"></i> Connection error!</div>');
        //setTimeout(function(){ $(".result").html(''); }, 5000);
    }

}



/////// send vote
function sendVote(p) {

    var pid = p;
    var poid = document.getElementById("vote_option").value;
    var email = localStorage.email;
    var delay = 4000;

    if (poid && poid !== "") {

        $(".vote-button-" + p).html('<i class="fa fa-spinner fa-spin" style=""></i> ...processing ');
        $.ajax({
            url: host + "/api/sendVote",
            type: "GET",
            dataType: 'jsonp',
            timeout: 50000,
            data: { email: email, pid: pid, poid: poid },
            success: function (data) {
                //console.log(data.msg);
                if (data.symbol > 0) {
                    $(".vote-button-" + p).html("Voted <i class=\"zmdi zmdi-badge-check\"></i>");
                    $(".vote-button-" + p).removeClass("btn-gradient-info");
                    $(".vote-button-" + p).removeClass("user-pointer");
                    $(".vote-button-" + p).addClass("btn-gradient-success");
                    $(".vote-button-" + p).prop("onclick", null).off("click");
                    getPolls();

                } else {

                    $(".vote-button-" + p).html(data.msg + " <i class=\"zmdi zmdi-badge-check\"></i>");
                    $(".vote-button-" + p).removeClass("btn-gradient-info");
                    $(".vote-button-" + p).addClass("btn-gradient-warning");
                    setTimeout(function () {
                        $(".vote-button-" + p).html("Vote <i class=\"zmdi zmdi-badge-check\"></i>");
                        $(".vote-button-" + p).removeClass("btn-gradient-warning");
                        $(".vote-button-" + p).addClass("btn-gradient-info");
                    }, delay);
                }

            },
            error: function (request, status, err) {
                if (status == "timeout") {
                    $(".vote-button-" + p).html("Slow Network!");
                    $(".vote-button-" + p).removeClass("btn-gradient-info");
                    $(".vote-button-" + p).addClass("btn-gradient-warning");

                } else {
                    $(".vote-button-" + p).html("Server Error!");
                    $(".vote-button-" + p).removeClass("btn-gradient-info");
                    $(".vote-button-" + p).addClass("btn-gradient-warning");

                }
                setTimeout(function () {
                    $(".vote-button-" + p).html("Vote <i class=\"zmdi zmdi-badge-check\"></i>");
                    $(".vote-button-" + p).removeClass("btn-gradient-warning");
                    $(".vote-button-" + p).removeClass("btn-gradient-info");
                }, delay);
            }
        });
    } else {
        Lobibox.notify('default', {
            size: 'mini',
            position: 'center top',
            msg: "Select an option!"
        });
        $(".msg-" + p).addClass("btn-gradient-warning");
        $(".msg-" + p).html("Select an option!");
        setTimeout(function () {
            $(".msg-" + p).html("");
            $(".msg-" + p).removeClass("btn-gradient-warning");
        }, delay);

    }
}


/////// get staff
function getStaff(s) {

    //var staffid = document.getElementById("staffid").value;
    var email = localStorage.email;
    var delay = 4000;

    $(".msg").html('<i class="fa fa-spinner fa-spin" style="font-size:24px"></i> ');
    $.ajax({
        url: host + "/api/getStaff",
        type: "GET",
        dataType: 'jsonp',
        timeout: 50000,
        data: { email: email, staffid: s },
        success: function (data) {
            //console.log(data.msg);
            if (data.symbol > 0) {

                $(".msg").html("");
                $("#name").val(data.result[0].name);
                $("#desig").val(data.result[0].desig);
                $("#phone").val(data.result[0].phone);
                $("#email").val(data.result[0].email);

            } else {

                $(".msg").html("<span class='alert alert-danger p-2'>" + data.msg + "</span>");
            }

        },
        error: function (request, status, err) {
            if (status == "timeout") {
                $(".msg").html("<span class='alert alert-danger p-2'>Slow Network!</span>");

            } else {
                $(".msg").html("<span class='alert alert-danger p-2'>Error connecting Server!</span>");

            }
        }
    });
    setTimeout(function () { $(".msg").html(''); }, delay);
}


/////////// update staff
function updateStaff() {

    var staffid = document.getElementById("sid").value;
    var name = document.getElementById("name").value;
    var desig = document.getElementById("desig").value;
    var coycat = document.getElementById("coycat").value;
    var phone = document.getElementById("phone").value;
    var uemail = document.getElementById("email").value;
    var email = localStorage.email;
    var delay = 4000;


    $(".msg").html('<i class="fa fa-spinner fa-spin" style="font-size:24px"></i> ');
    $.ajax({
        url: host + "/api/updateStaff",
        type: "GET",
        dataType: 'jsonp',
        timeout: 5000,
        data: { email: email, staffid: staffid, name: name, desig: desig, coycat: coycat, phone: phone, uemail: uemail },
        success: function (data) {
            //console.log(data.msg);
            if (data.symbol > 0) {
                $(".msg").html("<span class='alert alert-success p-2'>" + data.msg + "</span>");
                $("#formCoy")[0].reset();
                //window.top.$("span.ti-close").click();
                setTimeout(function () { /*location.href=src;*/  closeFrame(); }, delay);

            } else {
                $(".msg").html("<span class='alert alert-danger p-2'>" + data.msg + "</span>");

            }

        },
        error: function (request, status, err) {
            if (status == "timeout") {
                $(".msg").html("<span class='alert alert-danger p-2'>Slow Network!</span>");

            } else {
                $(".msg").html("<span class='alert alert-danger p-2'>Error connecting Server!</span>");

            }
        }
    });
    setTimeout(function () { $(".msg").html(''); }, delay);
}

/////// get project
function getProject(p) {

    //var staffid = document.getElementById("staffid").value;
    var email = localStorage.email;
    var delay = 6000;

    $(".msg").html('<i class="fa fa-spinner fa-spin" style="font-size:24px"></i> ');
    $.ajax({
        url: "https://redan.quantumcloud.ng/api/getProject",
        type: "GET",
        dataType: 'jsonp',
        timeout: 50000,
        data: { email: email, pid: p },
        success: function (data) {
            //console.log(data.msg);
            if (data.symbol > 0) {

                $(".msg").html("");
                $("#name").val(data.result[0].name);
                $("#loc").val(data.result[0].loc);
                $("#status").val(data.result[0].status);
                var status = data.result[0].status;
                $("#start").val(data.result[0].start);
                $("#end").val(data.result[0].end);
                $("#level").val(data.result[0].level);
                $("#cost").val(data.result[0].cost);
                $("#cost").blur();
                $("#note").val(data.result[0].desn);
                if (status == "CURRENT") {
                    //document.getElementById("end-section").style.display = "block";
                    $(".end-label").html('Expected Date of Completion<span style="color:#F00">*</span>');

                } else if (status == "COMPLETED") {
                    //document.getElementById("end-section").style.display = "block";
                    $(".end-label").html('Date Completed<span style="color:#F00">*</span>');

                };

            } else {

                $(".msg").html("<span class='alert alert-danger p-2'>" + data.msg + "</span>");
            }

        },
        error: function (request, status, err) {
            if (status == "timeout") {
                $(".msg").html("<span class='alert alert-danger p-2'>Slow Network!</span>");

            } else {
                $(".msg").html("<span class='alert alert-danger p-2'>Error connecting Server!</span>");

            }
        }
    });
    setTimeout(function () { $(".msg").html(''); }, delay);
}

/////////// update project
function updateProject() {

    var pid = document.getElementById("pid").value;
    var name = document.getElementById("name").value;
    var loc = document.getElementById("loc").value;
    var status = document.getElementById("status").value;
    var start = document.getElementById("start").value;
    var end = document.getElementById("end").value;
    var level = document.getElementById("level").value;
    var cost = document.getElementById("cost").value;
    var desn = document.getElementById("note").value;
    var email = localStorage.email;
    var delay = 6000;
    cost = parseFloat(cost.replace(/,/g, ''));
    var src = "settingsPrj.html";
    /* if(coycat == "BOD" ){ src = "settingsBod.html"; }
     if(coycat == "REP" ){ src = "settingsRep.html"; }
     if(coycat == "PRO" ){ src = "settingsPro.html"; }*/

    $(".msg").html('<i class="fa fa-spinner fa-spin" style="font-size:24px"></i> ');
    $.ajax({
        url: "https://redan.quantumcloud.ng/api/updateProject",
        type: "GET",
        dataType: 'jsonp',
        timeout: 5000,
        data: { email: email, pid: pid, name: name, loc: loc, status: status, start: start, end: end, level: level, cost: cost, desn: desn },
        success: function (data) {
            //console.log(data.msg);
            if (data.symbol > 0) {
                $(".msg").html(data.msg);
                setTimeout(function () { location.href = src; }, delay);

            } else {
                $(".msg").html("<span class='alert alert-danger p-2'>" + data.msg + "</span>");

            }

        },
        error: function (request, status, err) {
            if (status == "timeout") {
                $(".msg").html("<span class='alert alert-danger p-2'>Slow Network!</span>");

            } else {
                $(".msg").html("<span class='alert alert-danger p-2'>Error connecting Server!</span>");

            }
        }
    });
    setTimeout(function () { $(".msg").html(''); }, delay);
}


/////// show memo
function showMemo(p) {

    var email = localStorage.email;
    var delay = 5000;

    $(".msg").html('<i class="fa fa-spinner fa-spin" style="font-size:24px"></i> ');
    $.ajax({
        url: host + "/api/memoShow",
        type: "GET",
        dataType: 'jsonp',
        timeout: 8000,
        data: { email: email, pid: p },
        success: function (data) {
            //console.log(data.msg);
            if (data.symbol > 0) {

                $("#mfrom").html(data.result[0].mfrom.toUpperCase());
                $("#mto").html(data.result[0].mto.toUpperCase());
                $("#ref").html(data.result[0].ref.toUpperCase());
                $("#created").html(data.result[0].created.toUpperCase());
                $("#subj").html(data.result[0].subj.toUpperCase());
                $("#memo-content").html(data.result[0].memo);
                $("#memo-cat").html(data.result[0].mcat.toUpperCase());
                $("#memo-rank").html(data.result[0].rank.toUpperCase());
                $("#memo-desig").html(data.result[0].designation.toUpperCase());
                $("#memo-name").html((data.result[0].fname + "  " + data.result[0].lname).toUpperCase());
                if (data.result[0].sig && data.result[0].sig !== "") { $("#memo-sig").html("<img src='" + data.result[0].sig + "' height='100' width='300'/>"); } else { $("#memo-sig").html("") };
                $(".msg").html('');
                resizeFrame();
            } else {

                $(".msg").html("<span class='alert alert-danger p-2'>" + data.msg + "</span>");
            }

        },
        error: function (request, status, err) {
            if (status == "timeout") {
                $(".msg").html("<span class='alert alert-danger p-2'>Slow Network!</span>");

            } else {
                $(".msg").html("<span class='alert alert-danger p-2'>Error connecting Server!</span>");

            }
        }
    });
    setTimeout(function () { $(".msg").html(''); }, delay);
}





/////// show company
function showCompany(p) {

    var email = localStorage.email;
    var delay = 5000;

    $(".msg").html('<i class="fa fa-spinner fa-spin" style="font-size:24px"></i> ');
    $.ajax({
        url: host + "/api/companyShow",
        type: "GET",
        dataType: 'jsonp',
        timeout: 8000,
        data: { email: email, pid: p },
        success: function (data) {
            //console.log(data.msg);
            if (data.symbol > 0) {

                $("#coy").val(data.result[0].coy);
                $("#phone").val(data.result[0].phone);
                $("#regno").val(data.result[0].cac);
                $("#email").val(data.result[0].email);
                $("#website").val(data.result[0].website);
                $("#state").val(data.result[0].state);
                $("#address").val(data.result[0].address);
                $("#mark").val(data.result[0].mark);
                $("#asso").val(data.result[0].asso);
                $("#coop").val(data.result[0].coop);

                $(".msg").html('');

            } else {

                $(".msg").html("<span class='alert alert-danger p-2'>" + data.msg + "</span>");
            }

        },
        error: function (request, status, err) {
            if (status == "timeout") {
                $(".msg").html("<span class='alert alert-danger p-2'>Slow Network!</span>");

            } else {
                $(".msg").html("<span class='alert alert-danger p-2'>Error connecting Server!</span>");

            }
        }
    });
    setTimeout(function () { $(".msg").html(''); }, delay);
}

////// update company
function updateCompany() {
    //alert("ok")
    var oid = document.getElementById("oid").value;
    var coy = document.getElementById("coy").value;
    var cac = document.getElementById("regno").value;
    var phone = document.getElementById("phone").value;
    var cemail = document.getElementById("email").value;
    var website = document.getElementById("website").value;
    var address = document.getElementById("address").value;
    var mark = document.getElementById("mark").value;
    var state = document.getElementById("state").value;
    var asso = document.getElementById("asso").value;
    var coop = document.getElementById("coop").value;
    var email = localStorage.email;
    var delay = 6000;

    $(".msg").html('<i class="fa fa-spinner fa-spin" style="font-size:24px"></i> ');
    $.ajax({
        url: host + "/api/companyUpdate",
        type: "GET",
        dataType: 'jsonp',
        timeout: 5000,
        data: { email: email, oid: oid, coy: coy, cac: cac, phone: phone, cemail: cemail, website: website, address: address, mark: mark, state: state, asso: asso, coop: coop },
        success: function (data) {
            //console.log(data.msg);
            if (data.symbol > 0) {

                $(".msg").html("<span class='alert alert-success p-2'>" + data.msg + "</span>");
                changeFrame(3);

            } else {
                $(".msg").html("<span class='alert alert-danger p-2'>" + data.msg + "</span>");

            }

        },
        error: function (request, status, err) {
            if (status == "timeout") {
                $(".msg").html("<span class='alert alert-danger p-2'>Slow Network!</span>");

            } else {
                $(".msg").html("<span class='alert alert-danger p-2'>Error connecting Server!</span>");

            }
        }
    });
    setTimeout(function () { $(".msg").html(''); }, delay);
}

////// update structure
function updateStructure() {

    var oid = document.getElementById("oid").value;
    var email = localStorage.email;
    var delay = 5000;

    $(".msg").html('<i class="fa fa-spinner fa-spin" style="font-size:24px"></i> ');
    $.ajax({
        url: host + "/api/updateStructure",
        type: "GET",
        dataType: 'jsonp',
        timeout: 5000,
        data: { email: email, oid: oid },
        success: function (data) {
            //console.log(data.msg);
            if (data.symbol > 0) {

                $(".msg").html("<span class='alert alert-success p-2'>" + data.msg + "</span>");

                changeFrame(4);

            } else {
                $(".msg").html("<span class='alert alert-danger p-2'>" + data.msg + "</span>");

            }

        },
        error: function (request, status, err) {
            if (status == "timeout") {
                $(".msg").html("<span class='alert alert-danger p-2'>Slow Network!</span>");

            } else {
                $(".msg").html("<span class='alert alert-danger p-2'>Error connecting Server!</span>");

            }
        }
    });
    setTimeout(function () { $(".msg").html(''); }, delay);
}

////// update products
function updateProducts() {

    var oid = document.getElementById("oid").value;
    var email = localStorage.email;
    var delay = 5000;

    $(".msg").html('<i class="fa fa-spinner fa-spin" style="font-size:24px"></i> ');
    $.ajax({
        url: host + "/api/updateProducts",
        type: "GET",
        dataType: 'jsonp',
        timeout: 5000,
        data: { email: email, oid: oid },
        success: function (data) {
            //console.log(data.msg);
            if (data.symbol > 0) {

                $(".msg").html("<span class='alert alert-success p-2'>" + data.msg + "</span>");

                changeFrame(6);

            } else {
                $(".msg").html("<span class='alert alert-danger p-2'>" + data.msg + "</span>");

            }

        },
        error: function (request, status, err) {
            if (status == "timeout") {
                $(".msg").html("<span class='alert alert-danger p-2'>Slow Network!</span>");

            } else {
                $(".msg").html("<span class='alert alert-danger p-2'>Error connecting Server!</span>");

            }
        }
    });
    setTimeout(function () { $(".msg").html(''); }, delay);
}

////// update financials
function updateFinancials() {
    //alert("ok");
    //var oid = document.getElementById("oid").value;		
    var email = localStorage.email;
    var cdeptdays = document.getElementById("cdeptdays").value
    var vdeptdays = document.getElementById("vdeptdays").value
    var stockdays = document.getElementById("stockdays").value
    var loans = document.getElementById("loans").value
    var creditor = document.getElementById("creditor").value
    var amt = document.getElementById("amt").value
    var rate = document.getElementById("rate").value
    var end = document.getElementById("end").value
    var investment = document.getElementById("investment").value
    var delay = 5000;

    $(".msg").html('<i class="fa fa-spinner fa-spin" style="font-size:24px"></i> ');
    $.ajax({
        url: host + "/api/updateFinancials",
        type: "GET",
        dataType: 'jsonp',
        timeout: 5000,
        data: { email: email, pid: localStorage.pid, cdeptdays: cdeptdays, vdeptdays: vdeptdays, stockdays: stockdays, loans: loans, creditor: creditor, amt: amt, rate: rate, end: end, investment: investment },
        success: function (data) {
            //console.log(data.msg);
            if (data.symbol > 0) {

                $(".msg").html("<span class='alert alert-success p-2'>" + data.msg + "</span>");

                changeFrame(8);

            } else {
                $(".msg").html("<span class='alert alert-danger p-2'>" + data.msg + "</span>");

            }

        },
        error: function (request, status, err) {
            if (status == "timeout") {
                $(".msg").html("<span class='alert alert-danger p-2'>Slow Network!</span>");

            } else {
                $(".msg").html("<span class='alert alert-danger p-2'>Error connecting Server!</span>");

            }
        }
    });
    setTimeout(function () { $(".msg").html(''); }, delay);
}

/////// show financials
function showFinancials(p) {

    var email = localStorage.email;
    var delay = 5000;

    $(".msg").html('<i class="fa fa-spinner fa-spin" style="font-size:24px"></i> ');
    $.ajax({
        url: host + "/api/financialsShow",
        type: "GET",
        dataType: 'jsonp',
        timeout: 5000,
        data: { email: email, pid: p },
        success: function (data) {
            //console.log(data.msg);
            if (data.symbol > 0) {
                $("#cdeptdays").val(data.result[0].cdeptdays);
                $("#vdeptdays").val(data.result[0].vdeptdays);
                $("#stockdays").val(data.result[0].stockdays);
                $("#loans").val(data.result[0].loans);
                if (data.result[0].loans == "Yes") {
                    $('#loans_holder').show();
                }
                if (data.result[0].loans == "No") {
                    $('#loans_holder').hide();
                    $('#creditor').val('');
                    $('#amt').val('');
                    $('#rate').val('');
                    $('#end').val('');
                    $('#creditor').prop('required', false);
                    $('#amt').prop('required', false);
                    $('#rate').prop('required', false);
                    $('#end').prop('required', false);
                }
                $("#creditor").val(data.result[0].creditor);
                $("#amt").val(data.result[0].amt);
                $("#rate").val(data.result[0].rate);
                $("#end").val(data.result[0].end);
                $("#investment").val(data.result[0].investment);
                resizeFrame();
                $(".msg").html('');

            } else {

                $(".msg").html("<span class='alert alert-danger p-2'>" + data.msg + "</span>");
            }

        },
        error: function (request, status, err) {
            if (status == "timeout") {
                $(".msg").html("<span class='alert alert-danger p-2'>Slow Network!</span>");

            } else {
                $(".msg").html("<span class='alert alert-danger p-2'>Error connecting Server!</span>");

            }
        }
    });
    setTimeout(function () { $(".msg").html(''); }, delay);
}

////// update fundings
function updateFundings() {
    //alert("ok");
    //var oid = document.getElementById("oid").value;		
    var email = localStorage.email;
    var source = document.getElementById("source").value
    var amt = document.getElementById("amt").value
    var institution = document.getElementById("institution").value
    var purpose = document.getElementById("purpose").value
    var tenure = document.getElementById("tenure").value
    var start = document.getElementById("start").value
    var repay = document.getElementById("repay").value
    var rate = document.getElementById("rate").value
    var moratorium = document.getElementById("moratorium").value
    var delay = 5000;

    $(".msg").html('<i class="fa fa-spinner fa-spin" style="font-size:24px"></i> ');
    $.ajax({
        url: host + "/api/updateFundings",
        type: "GET",
        dataType: 'jsonp',
        timeout: 5000,
        data: { email: email, pid: localStorage.pid, source: source, amt: amt, institution: institution, purpose: purpose, tenure: tenure, start: start, repay: repay, rate: rate, moratorium: moratorium },
        success: function (data) {
            //console.log(data.msg);
            if (data.symbol > 0) {

                $(".msg").html("<span class='alert alert-success p-2'>" + data.msg + "</span>");

                changeFrame(9);

            } else {
                $(".msg").html("<span class='alert alert-danger p-2'>" + data.msg + "</span>");

            }

        },
        error: function (request, status, err) {
            if (status == "timeout") {
                $(".msg").html("<span class='alert alert-danger p-2'>Slow Network!</span>");

            } else {
                $(".msg").html("<span class='alert alert-danger p-2'>Error connecting Server!</span>");

            }
        }
    });
    setTimeout(function () { $(".msg").html(''); }, delay);
}

/////// show fundings
function showFundings(p) {

    var email = localStorage.email;
    var delay = 5000;

    $(".msg").html('<i class="fa fa-spinner fa-spin" style="font-size:24px"></i> ');
    $.ajax({
        url: host + "/api/fundingsShow",
        type: "GET",
        dataType: 'jsonp',
        timeout: 5000,
        data: { email: email, pid: p },
        success: function (data) {
            //console.log(data.msg);
            if (data.symbol > 0) {
                $("#source").val(data.result[0].source);
                $("#amt").val(data.result[0].amt);
                $("#institution").val(data.result[0].institution);
                $("#purpose").val(data.result[0].purpose);
                $("#tenure").val(data.result[0].tenure);
                $("#start").val(data.result[0].start);
                $("#repay").val(data.result[0].repay);
                $("#rate").val(data.result[0].rate);
                $("#moratorium").val(data.result[0].moratorium);
                resizeFrame();
                $(".msg").html('');

            } else {

                $(".msg").html("<span class='alert alert-danger p-2'>" + data.msg + "</span>");
            }

        },
        error: function (request, status, err) {
            if (status == "timeout") {
                $(".msg").html("<span class='alert alert-danger p-2'>Slow Network!</span>");

            } else {
                $(".msg").html("<span class='alert alert-danger p-2'>Error connecting Server!</span>");

            }
        }
    });
    setTimeout(function () { $(".msg").html(''); }, delay);
}

/////// show business
function showBusiness(p) {

    var email = localStorage.email;
    var delay = 5000;

    $(".msg").html('<i class="fa fa-spinner fa-spin" style="font-size:24px"></i> ');
    $.ajax({
        url: host + "/api/businessShow",
        type: "GET",
        dataType: 'jsonp',
        timeout: 5000,
        data: { email: email, pid: p },
        success: function (data) {
            //console.log(data.msg);
            if (data.symbol > 0) {
                $("#oid").val(data.result[0].p);
                $("#sector").val(data.result[0].sector);
                $("#overview").val(data.result[0].overview);
                $("#phase").val(data.result[0].phase);
                $("#years").val(data.result[0].years);

                if (data.result[0].p_guide) { $("#p_guide").prop('checked', true); };
                if (data.result[0].p_loan) { $("#p_loan").prop('checked', true); };
                if (data.result[0].p_invest) { $("#p_invest").prop('checked', true); };
                if (data.result[0].p_grant) { $("#p_grant").prop('checked', true); };
                if (data.result[0].purpose2) {
                    $("#p_others").prop('checked', true);
                    $('#purpose2_holder').show();
                };

                $("#purpose2").val(data.result[0].purpose2);
                $("#strength_1").val(data.result[0].strength_1);
                $("#strength_2").val(data.result[0].strength_2);
                $("#strength_3").val(data.result[0].strength_3);
                $("#weakness_1").val(data.result[0].weakness_1);
                $("#weakness_2").val(data.result[0].weakness_2);
                $("#weakness_3").val(data.result[0].weakness_3);
                $("#opportunity_1").val(data.result[0].opportunity_1);
                $("#opportunity_2").val(data.result[0].opportunity_2);
                $("#opportunity_3").val(data.result[0].opportunity_3);
                $("#threat_1").val(data.result[0].threat_1);
                $("#threat_2").val(data.result[0].threat_2);
                $("#threat_3").val(data.result[0].threat_3);



                $(".msg").html('');

            } else {

                $(".msg").html("<span class='alert alert-danger p-2'>" + data.msg + "</span>");
            }

        },
        error: function (request, status, err) {
            if (status == "timeout") {
                $(".msg").html("<span class='alert alert-danger p-2'>Slow Network!</span>");

            } else {
                $(".msg").html("<span class='alert alert-danger p-2'>Error connecting Server!</span>");

            }
        }
    });
    setTimeout(function () { $(".msg").html(''); }, delay);
}

/////// update business
function updateBusiness() {
    //alert(localStorage.pid)
    if ($('div.checkbox-group.required :checkbox:checked').length == 0) {
        alert("Please Indicate purpose of this plan!");
        return false;
    }
    var oid = localStorage.pid;
    var sector = document.getElementById("sector").value;
    var overview = document.getElementById("overview").value;
    var phase = document.getElementById("phase").value;
    var years = document.getElementById("years").value;
    var purpose2 = $('.purpose2').val();
    var p_guide = $('#p_guide').val();
    var p_loan = $('#p_loan').val();
    var p_invest = $('#p_invest').val();
    var p_grant = $('#p_grant').val();
    /*var purpose = [];
        $.each($("input[name='purpose']:checked"), function(){
          purpose.push($(this).val());
        });
        purpose.join(", ");*/
    /*$("input[name='purpose']:checked").each(function(i){
      purpose[i] = $(this).val();
    });*/
    //var purpose = $('input[name=purpose]:checked').val();	
    var purpose2 = document.getElementById("purpose2").value;
    var strength_1 = document.getElementById("strength_1").value;
    var strength_2 = document.getElementById("strength_2").value;
    var strength_3 = document.getElementById("strength_3").value;
    var weakness_1 = document.getElementById("weakness_1").value;
    var weakness_2 = document.getElementById("weakness_2").value;
    var weakness_3 = document.getElementById("weakness_3").value;
    var opportunity_1 = document.getElementById("opportunity_1").value;
    var opportunity_2 = document.getElementById("opportunity_2").value;
    var opportunity_3 = document.getElementById("opportunity_3").value;
    var threat_1 = document.getElementById("threat_1").value;
    var threat_2 = document.getElementById("threat_2").value;
    var threat_3 = document.getElementById("threat_3").value;
    var email = localStorage.email;
    var delay = 6000;

    $(".msg").html('<i class="fa fa-spinner fa-spin" style="font-size:24px"></i> ');
    $.ajax({
        url: host + "/api/businessUpdate",
        type: "GET",
        dataType: 'jsonp',
        timeout: 5000,
        data: { email: email, oid: oid, sector: sector, overview: overview, phase: phase, years: years, p_guide: p_guide, p_loan: p_loan, p_invest: p_invest, p_grant: p_grant, purpose2: purpose2, strength_1: strength_1, strength_2: strength_2, strength_3: strength_3, weakness_1: weakness_1, weakness_2: weakness_2, weakness_3: weakness_3, opportunity_1: opportunity_1, opportunity_2: opportunity_2, opportunity_3: opportunity_3, threat_1: threat_1, threat_2: threat_2, threat_3: threat_3 },
        success: function (data) {
            //console.log(data.msg);
            if (data.symbol > 0) {

                $(".msg").html("<span class='alert alert-success p-2'>" + data.msg + "</span>");

                changeFrame(5);

            } else {
                $(".msg").html("<span class='alert alert-danger p-2'>" + data.msg + "</span>");

            }

        },
        error: function (request, status, err) {
            if (status == "timeout") {
                $(".msg").html("<span class='alert alert-danger p-2'>Slow Network!</span>");

            } else {
                $(".msg").html("<span class='alert alert-danger p-2'>Error connecting Server!</span>");

            }
        }
    });
    setTimeout(function () { $(".msg").html(''); }, delay);
}


/////// show market
function showMarket(p) {

    var email = localStorage.email;
    var delay = 5000;

    $(".msg").html('<i class="fa fa-spinner fa-spin" style="font-size:24px"></i> ');
    $.ajax({
        url: host + "/api/marketShow",
        type: "GET",
        dataType: 'jsonp',
        timeout: 5000,
        data: { email: email, pid: p },
        success: function (data) {
            //console.log(data.msg);
            if (data.symbol > 0) {
                $("#oid").val(data.result[0].p);
                if (data.result[0].purpose2) {
                    $("#p_others").prop('checked', true);
                    $('#purpose2_holder').show();
                };

                if (data.result[0].preferred1) { $(preferred1).prop('checked', true); $(preferred1).val(data.result[0].preferred1); }
                if (data.result[0].preferred2) { $(preferred2).prop('checked', true); $(preferred2).val(data.result[0].preferred2); }
                if (data.result[0].preferred3) { $(preferred3).prop('checked', true); $(preferred3).val(data.result[0].preferred3); }
                if (data.result[0].preferred4) { $(preferred4).prop('checked', true); $(preferred4).val(data.result[0].preferred4); }
                if (data.result[0].preferred5) { $(preferred5).prop('checked', true); $(preferred5).val(data.result[0].preferred5); }
                if (data.result[0].admode1) { $(admode1).prop('checked', true); $(admode1).val(data.result[0].admode1); }
                if (data.result[0].admode2) { $(admode2).prop('checked', true); $(admode2).val(data.result[0].admode2); }
                if (data.result[0].admode3) { $(admode3).prop('checked', true); $(admode3).val(data.result[0].admode3); }
                if (data.result[0].admode4) { $(admode4).prop('checked', true); $(admode4).val(data.result[0].admode4); }
                if (data.result[0].admode5) { $(admode5).prop('checked', true); $(admode5).val(data.result[0].admode5); }
                if (data.result[0].admode6) {
                    $("#admode_others").prop('checked', true);
                    $('#admode6_holder').show();
                    $('#admode6').val(data.result[0].admode6);
                };
                if (data.result[0].m_target1) { $(m_target1).prop('checked', true); $(m_target1).val(data.result[0].m_target1); }
                if (data.result[0].m_target2) { $(m_target2).prop('checked', true); $(m_target2).val(data.result[0].m_target2); }
                if (data.result[0].s_target1) { $(s_target1).prop('checked', true); $(s_target1).val(data.result[0].s_target1); }
                if (data.result[0].s_target2) { $(s_target2).prop('checked', true); $(s_target2).val(data.result[0].s_target2); }
                if (data.result[0].loc) {
                    var locs = data.result[0].loc.split(',');
                    $('#loc').val(locs).trigger('change');
                }
                if (data.result[0].sell_mode1) { $(sell_mode1).prop('checked', true); $(sell_mode1).val(data.result[0].sell_mode1); }
                if (data.result[0].sell_mode2) { $(sell_mode2).prop('checked', true); $(sell_mode2).val(data.result[0].sell_mode2); }
                if (data.result[0].sell_mode3) { $(sell_mode3).prop('checked', true); $(sell_mode3).val(data.result[0].sell_mode3); }
                if (data.result[0].sell_mode4) { $(sell_mode4).prop('checked', true); $(sell_mode4).val(data.result[0].sell_mode4); }
                if (data.result[0].sell_mode5) { $(sell_mode5).prop('checked', true); $(sell_mode5).val(data.result[0].sell_mode5); }
                if (data.result[0].sell_mode6) { $(sell_mode6).prop('checked', true); $(sell_mode6).val(data.result[0].sell_mode6); }
                if (data.result[0].sell_mode7) {
                    $("#sell_mode_others").prop('checked', true);
                    $('#sell_mode7_holder').show();
                    $('#sell_mode7').val(data.result[0].sell_mode7);
                };

                if (data.result[0].mfocus) { $('#mfocus').val(data.result[0].mfocus); }



                $(".msg").html('');

            } else {

                $(".msg").html("<span class='alert alert-danger p-2'>" + data.msg + "</span>");
            }

        },
        error: function (request, status, err) {
            if (status == "timeout") {
                $(".msg").html("<span class='alert alert-danger p-2'>Slow Network!</span>");

            } else {
                $(".msg").html("<span class='alert alert-danger p-2'>Error connecting Server!</span>");

            }
        }
    });
    setTimeout(function () { $(".msg").html(''); }, delay);
}

/////////// update market
function updateMarket() {
    //alert(localStorage.pid)
    if ($('div.checkbox-group.required :checkbox:checked').length == 0) {
        alert("Please Indicate purpose of this plan!");
        return false;
    }
    var oid = localStorage.pid;
    var email = localStorage.email;
    /*var preferred1 = "";
    if($("#preferred1").prop("checked") == true){preferred1 = $('#preferred1').val();};*/
    var preferred1 = document.getElementById("preferred1").value
    var preferred2 = document.getElementById("preferred2").value
    var preferred3 = document.getElementById("preferred3").value
    var preferred4 = document.getElementById("preferred4").value
    var preferred5 = document.getElementById("preferred5").value
    var admode1 = document.getElementById("admode1").value
    var admode2 = document.getElementById("admode2").value
    var admode3 = document.getElementById("admode3").value
    var admode4 = document.getElementById("admode4").value
    var admode5 = document.getElementById("admode5").value
    var admode6 = document.getElementById("admode6").value
    var m_target1 = document.getElementById("m_target1").value
    var m_target2 = document.getElementById("m_target2").value
    var s_target1 = document.getElementById("s_target1").value
    var s_target2 = document.getElementById("s_target2").value
    var loc = document.getElementById("mloc").value
    var sell_mode1 = document.getElementById("sell_mode1").value
    var sell_mode2 = document.getElementById("sell_mode2").value
    var sell_mode3 = document.getElementById("sell_mode3").value
    var sell_mode4 = document.getElementById("sell_mode4").value
    var sell_mode5 = document.getElementById("sell_mode5").value
    var sell_mode6 = document.getElementById("sell_mode6").value
    var sell_mode7 = document.getElementById("sell_mode7").value
    var mfocus = document.getElementById("mfocus").value
    var delay = 6000;

    $(".msg").html('<i class="fa fa-spinner fa-spin" style="font-size:24px"></i> ');
    $.ajax({
        url: host + "/api/marketUpdate",
        type: "GET",
        dataType: 'jsonp',
        timeout: 5000,
        data: { email: email, oid: oid, preferred1: preferred1, preferred2: preferred2, preferred3: preferred3, preferred4: preferred4, preferred5: preferred5, admode1: admode1, admode2: admode2, admode3: admode3, admode4: admode4, admode5: admode5, admode6: admode6, m_target1: m_target1, m_target2: m_target2, s_target1: s_target1, s_target2: s_target2, loc: loc, sell_mode1: sell_mode1, sell_mode2: sell_mode2, sell_mode3: sell_mode3, sell_mode4: sell_mode4, sell_mode5: sell_mode5, sell_mode6: sell_mode6, sell_mode7: sell_mode7, mfocus: mfocus },
        success: function (data) {
            //console.log(data.msg);
            if (data.symbol > 0) {

                $(".msg").html("<span class='alert alert-success p-2'>" + data.msg + "</span>");

                changeFrame(7);

            } else {
                $(".msg").html("<span class='alert alert-danger p-2'>" + data.msg + "</span>");

            }

        },
        error: function (request, status, err) {
            if (status == "timeout") {
                $(".msg").html("<span class='alert alert-danger p-2'>Slow Network!</span>");

            } else {
                $(".msg").html("<span class='alert alert-danger p-2'>Error connecting Server!</span>");

            }
        }
    });
    setTimeout(function () { $(".msg").html(''); }, delay);
}

/////// show financials
function showFin() {

    var email = localStorage.email;
    var delay = 10000;

    //$(".msg").html('<i class="fa fa-spinner fa-spin" style="font-size:24px"></i> ');	
    $.ajax({
        url: "https://redan.quantumcloud.ng/api/finShow",
        type: "GET",
        dataType: 'jsonp',
        timeout: 8000,
        data: { email: email },
        success: function (data) {
            //console.log(data.msg);
            if (data.symbol > 0) {

                $("#sc").val(data.sc);
                $("#sc").blur();
                $("#pc").val(data.pc);
                $("#pc").blur();
                $(".msg").html('');

            } else {

                $(".msg").html("<span class='alert alert-danger p-2'>" + data.msg + "</span>");
            }

        },
        error: function (request, status, err) {
            if (status == "timeout") {
                $(".msg").html("<span class='alert alert-danger p-2'>Slow Network!</span>");

            } else {
                $(".msg").html("<span class='alert alert-danger p-2'>Error connecting Server!</span>");

            }
        }
    });
    setTimeout(function () { $(".msg").html(''); }, delay);
}

/////// show experience
function showExp() {

    var email = localStorage.email;
    var delay = 10000;

    //$(".msg").html('<i class="fa fa-spinner fa-spin" style="font-size:24px"></i> ');	
    $.ajax({
        url: "https://redan.quantumcloud.ng/api/expShow",
        type: "GET",
        dataType: 'jsonp',
        timeout: 8000,
        data: { email: email },
        success: function (data) {
            //console.log(data.msg);
            if (data.symbol > 0) {

                $("#exp1").val(data.exp1);
                $("#exp1").blur();
                $("#exp2").val(data.exp2);
                $("#exp2").blur();
                $("#exp3").val(data.exp3);
                $("#exp3").blur();
                $(".msg").html('');

            } else {

                $(".msg").html("<span class='alert alert-danger p-2'>" + data.msg + "</span>");
            }

        },
        error: function (request, status, err) {
            if (status == "timeout") {
                $(".msg").html("<span class='alert alert-danger p-2'>Slow Network!</span>");

            } else {
                $(".msg").html("<span class='alert alert-danger p-2'>Error connecting Server!</span>");

            }
        }
    });
    setTimeout(function () { $(".msg").html(''); }, delay);
}

/////// show previous membership details
function showMem() {

    var email = localStorage.email;
    var delay = 6000;

    //$(".msg").html('<i class="fa fa-spinner fa-spin" style="font-size:24px"></i> ');	
    $.ajax({
        url: "https://redan.quantumcloud.ng/api/memShow",
        type: "GET",
        dataType: 'jsonp',
        timeout: 8000,
        data: { email: email },
        success: function (data) {
            //console.log(data.msg);
            if (data.symbol > 0) {

                $("#start").val(data.dpr);
                $("#mrn").val(data.mrn);
                $("#end").val(data.lsy);
                $(".msg").html('');

            } else {

                $(".msg").html("<span class='alert alert-danger p-2'>" + data.msg + "</span>");
            }

        },
        error: function (request, status, err) {
            if (status == "timeout") {
                $(".msg").html("<span class='alert alert-danger p-2'>Slow Network!</span>");

            } else {
                $(".msg").html("<span class='alert alert-danger p-2'>Error connecting Server!</span>");

            }
        }
    });
    setTimeout(function () { $(".msg").html(''); }, delay);
}

/////////// update financials
function updateFin() {

    var pc = document.getElementById("pc").value;
    var sc = document.getElementById("sc").value;
    pc = parseFloat(pc.replace(/,/g, ''));
    sc = parseFloat(sc.replace(/,/g, ''));
    var email = localStorage.email;
    var delay = 6000;

    $(".msg").html('<i class="fa fa-spinner fa-spin" style="font-size:24px"></i> ');
    $.ajax({
        url: "https://redan.quantumcloud.ng/api/finUpdate",
        type: "GET",
        dataType: 'jsonp',
        timeout: 5000,
        data: { email: email, pc: pc, sc: sc },
        success: function (data) {
            //console.log(data.msg);
            if (data.symbol > 0) {
                $(".msg").html(data.msg);

            } else {
                $(".msg").html("<span class='alert alert-danger p-2'>" + data.msg + "</span>");

            }

        },
        error: function (request, status, err) {
            if (status == "timeout") {
                $(".msg").html("<span class='alert alert-danger p-2'>Slow Network!</span>");

            } else {
                $(".msg").html("<span class='alert alert-danger p-2'>Error connecting Server!</span>");

            }
        }
    });
    setTimeout(function () { $(".msg").html(''); }, delay);
}

/////////// update experience
function updateExp() {

    var exp1 = document.getElementById("exp1").value;
    var exp2 = document.getElementById("exp2").value;
    var exp3 = document.getElementById("exp3").value;
    exp1 = parseFloat(exp1.replace(/,/g, ''));
    exp2 = parseFloat(exp2.replace(/,/g, ''));
    exp3 = parseFloat(exp3.replace(/,/g, ''));
    var email = localStorage.email;
    var delay = 6000;

    $(".msg").html('<i class="fa fa-spinner fa-spin" style="font-size:24px"></i> ');
    $.ajax({
        url: "https://redan.quantumcloud.ng/api/expUpdate",
        type: "GET",
        dataType: 'jsonp',
        timeout: 5000,
        data: { email: email, exp1: exp1, exp2: exp2, exp3: exp3 },
        success: function (data) {
            //console.log(data.msg);
            if (data.symbol > 0) {
                $(".msg").html(data.msg);

            } else {
                $(".msg").html("<span class='alert alert-danger p-2'>" + data.msg + "</span>");

            }

        },
        error: function (request, status, err) {
            if (status == "timeout") {
                $(".msg").html("<span class='alert alert-danger p-2'>Slow Network!</span>");

            } else {
                $(".msg").html("<span class='alert alert-danger p-2'>Error connecting Server!</span>");

            }
        }
    });
    setTimeout(function () { $(".msg").html(''); }, delay);
}

/////////// update previous membership details
function updateMem() {

    var dpr = document.getElementById("start").value;
    var mrn = document.getElementById("mrn").value;
    var lsy = document.getElementById("end").value;
    var email = localStorage.email;
    var delay = 6000;

    $(".msg").html('<i class="fa fa-spinner fa-spin" style="font-size:24px"></i> ');
    $.ajax({
        url: "https://redan.quantumcloud.ng/api/memUpdate",
        type: "GET",
        dataType: 'jsonp',
        timeout: 5000,
        data: { email: email, dpr: dpr, mrn: mrn, lsy: lsy },
        success: function (data) {
            //console.log(data.msg);
            if (data.symbol > 0) {
                $(".msg").html(data.msg);

            } else {
                $(".msg").html("<span class='alert alert-danger p-2'>" + data.msg + "</span>");

            }

        },
        error: function (request, status, err) {
            if (status == "timeout") {
                $(".msg").html("<span class='alert alert-danger p-2'>Slow Network!</span>");

            } else {
                $(".msg").html("<span class='alert alert-danger p-2'>Error connecting Server!</span>");

            }
        }
    });
    setTimeout(function () { $(".msg").html(''); }, delay);
}

////// delete staff
function delStaff() {

    var coycat = document.getElementById("coycat").value;
    var staffid = document.getElementById("staffid").value;
    var email = localStorage.email;
    var delay = 1000;
    var src = "settingsCoy.html";
    if (coycat == "BOD") { src = "settingsBod.html"; }
    if (coycat == "REP") { src = "settingsRep.html"; }
    if (coycat == "PRO") { src = "settingsPro.html"; }

    $(".msg").html("...processing <i class='fa fa-spinner fa-spin'></i>");
    $(".process_delete").attr("disabled", "disabled");
    $('.lobibox-close').click();
    $.ajax({
        url: "https://redan.quantumcloud.ng/api/deleteStaff",
        type: "GET",
        dataType: 'jsonp',
        timeout: 5000,
        data: { email: email, staffid: staffid, coycat: coycat },
        success: function (data) {

            if (data.symbol > 0) {
                $(".msg").html("<span class='alert alert-success p-2'>" + data.msg + "</span>");
                setTimeout(function () { location.href = src; }, delay);
            } else {
                $(".msg").html("<span class='alert alert-danger p-2'>" + data.msg + "</span>");
            }

            $(".process_delete").removeAttr("disabled");

        },
        error: function (request, status, err) {
            if (status == "timeout") {

                $(".process_delete").removeAttr("disabled");
                $(".msg").html("<span class='alert alert-danger p-2'>Slow Network!</span>");

            } else {

                $(".process_delete").removeAttr("disabled");
                $(".msg").html("<span class='alert alert-danger p-2'>Error connecting Server!</span>");

            }
        }
    });
    setTimeout(function () { $(".msg").html(''); }, delay);
}

////// delete project
function delProject() {


    var pid = document.getElementById("pid").value;
    var email = localStorage.email;
    var delay = 1000;
    var src = "settingsPrj.html";
    /*if(coycat == "BOD" ){ src = "settingsBod.html"; }
    if(coycat == "REP" ){ src = "settingsRep.html"; }
    if(coycat == "PRO" ){ src = "settingsPro.html"; }*/

    $(".msg").html("...processing <i class='fa fa-spinner fa-spin'></i>");
    $(".process_delete").attr("disabled", "disabled");
    $('.lobibox-close').click();
    $.ajax({
        url: "https://redan.quantumcloud.ng/api/deleteProject",
        type: "GET",
        dataType: 'jsonp',
        timeout: 5000,
        data: { email: email, pid: pid },
        success: function (data) {

            if (data.symbol > 0) {
                $(".msg").html("<span class='alert alert-success p-2'>" + data.msg + "</span>");
                setTimeout(function () { location.href = src; }, delay);
            } else {
                $(".msg").html("<span class='alert alert-danger p-2'>" + data.msg + "</span>");
            }

            $(".process_delete").removeAttr("disabled");

        },
        error: function (request, status, err) {
            if (status == "timeout") {

                $(".process_delete").removeAttr("disabled");
                $(".msg").html("<span class='alert alert-danger p-2'>Slow Network!</span>");

            } else {

                $(".process_delete").removeAttr("disabled");
                $(".msg").html("<span class='alert alert-danger p-2'>Error connecting Server!</span>");

            }
        }
    });
    setTimeout(function () { $(".msg").html(''); }, delay);
}

////// rate broker
function rateUser() {

    var lid = document.getElementById("lid").value;
    var score = document.querySelector('input[name="rater"]:checked').value;
    var comments = document.getElementById("comments").value;
    var email = localStorage.email;
    var delay = 5000;

    $(".msg").html("...processing rating <i class='fa fa-spinner fa-spin'></i>");
    $(".rate").attr("disabled", "disabled");
    $('.lobibox-close').click();
    $.ajax({
        url: "https://redan.quantumcloud.ng/api/rateUser",
        type: "GET",
        dataType: 'jsonp',
        timeout: 50000,
        data: { email: email, lid: lid, comments: comments, score: score },
        success: function (data) {

            if (data.symbol > 0) {
                $(".msg").html("<span class='alert alert-success p-2'>" + data.msg + "</span>");
            } else {


                $(".msg").html("<span class='alert alert-danger p-2'>" + data.msg + "</span>");
            }

            $(".rate").removeAttr("disabled");

        },
        error: function (request, status, err) {
            if (status == "timeout") {

                $(".rate").removeAttr("disabled");
                $(".msg").html("<span class='alert alert-danger p-2'>Slow Network!</span>");

            } else {

                $(".rate").removeAttr("disabled");
                $(".msg").html("<span class='alert alert-danger p-2'>Error connecting Server!</span>");

            }
        }
    });
    setTimeout(function () { $(".msg").html(''); }, delay);
}

////// rate carrier
function rateUser2() {

    var tid = document.getElementById("tid").value;
    var score = document.querySelector('input[name="rater"]:checked').value;
    var comments = document.getElementById("comments").value;
    var email = localStorage.email;
    var delay = 5000;

    $(".msg").html("...processing rating <i class='fa fa-spinner fa-spin'></i>");
    $(".rate").attr("disabled", "disabled");
    $('.lobibox-close').click();
    $.ajax({
        url: "https://redan.quantumcloud.ng/api/rateUser2",
        type: "GET",
        dataType: 'jsonp',
        timeout: 50000,
        data: { email: email, tid: tid, comments: comments, score: score },
        success: function (data) {

            if (data.symbol > 0) {

                $(".msg").html("<span class='alert alert-success p-2'>" + data.msg + "</span>");
            } else {


                $(".msg").html("<span class='alert alert-danger p-2'>" + data.msg + "</span>");
            }

            $(".rate").removeAttr("disabled");

        },
        error: function (request, status, err) {
            if (status == "timeout") {

                $(".rate").removeAttr("disabled");
                $(".msg").html("<span class='alert alert-danger p-2'>Slow Network!</span>");

            } else {

                $(".rate").removeAttr("disabled");
                $(".msg").html("<span class='alert alert-danger p-2'>Error connecting Server!</span>");

            }
        }
    });
    setTimeout(function () { $(".msg").html(''); }, delay);
}

////// book truck
function bookTruck() {

    var lid = document.getElementById("lid").value;
    var tid = document.getElementById("tid").value;
    var bcode = document.getElementById("bcode").value;
    var email = localStorage.email;
    var delay = 5000;

    $(".msg").html("...processing bid <i class='fa fa-spinner fa-spin'></i>");
    $(".process_bid").attr("disabled", "disabled");
    $('.lobibox-close').click();
    $.ajax({
        url: "https://redan.quantumcloud.ng/api/bookTruck",
        type: "GET",
        dataType: 'jsonp',
        timeout: 50000,
        data: { email: email, bcode: bcode, tid: tid, lid: lid },
        success: function (data) {

            if (data.symbol > 0) {
                if (data.book == 1) { var bookIcon = "<i class='fa fa-tags text-danger'></i>"; } else { var bookIcon = ""; };
                $("#tcode").append(" " + bookIcon);
                $(".msg").html("<span class='alert alert-success p-2'>" + data.msg + "</span>");
            } else {


                $(".msg").html("<span class='alert alert-danger p-2'>" + data.msg + "</span>");
            }

            $(".process_bid").removeAttr("disabled");

        },
        error: function (request, status, err) {
            if (status == "timeout") {

                $(".process_bid").removeAttr("disabled");
                $(".msg").html("<span class='alert alert-danger p-2'>Slow Network!</span>");

            } else {

                $(".process_bid").removeAttr("disabled");
                $(".msg").html("<span class='alert alert-danger p-2'>Error connecting Server!</span>");

            }
        }
    });
    setTimeout(function () { $(".msg").html(''); }, delay);
}

////// book Mover
function bookMover() {

    var lid = document.getElementById("lid").value;
    var moid = document.getElementById("moid").value;
    var bcode = document.getElementById("bcode").value;
    var email = localStorage.email;
    var delay = 5000;

    $(".msg").html("...processing bid <i class='fa fa-spinner fa-spin'></i>");
    $(".process_bid").attr("disabled", "disabled");
    $('.lobibox-close').click();
    $.ajax({
        url: "https://redan.quantumcloud.ng/api/bookMover",
        type: "GET",
        dataType: 'jsonp',
        timeout: 50000,
        data: { email: email, bcode: bcode, moid: moid, lid: lid },
        success: function (data) {

            if (data.symbol > 0) {
                if (data.book == 1) { var bookIcon = "<i class='fa fa-tags text-danger'></i>"; } else { var bookIcon = ""; };
                $("#tcode").append(" " + bookIcon);
                $(".msg").html("<span class='alert alert-success p-2'>" + data.msg + "</span>");
            } else {


                $(".msg").html("<span class='alert alert-danger p-2'>" + data.msg + "</span>");
            }

            $(".process_bid").removeAttr("disabled");

        },
        error: function (request, status, err) {
            if (status == "timeout") {

                $(".process_bid").removeAttr("disabled");
                $(".msg").html("<span class='alert alert-danger p-2'>Slow Network!</span>");

            } else {

                $(".process_bid").removeAttr("disabled");
                $(".msg").html("<span class='alert alert-danger p-2'>Error connecting Server!</span>");

            }
        }
    });
    setTimeout(function () { $(".msg").html(''); }, delay);
}

////// bid for load
function bidLoad() {

    var lid = document.getElementById("lid").value;
    var tid = document.getElementById("tid").value;
    var email = localStorage.email;
    var delay = 5000;

    $(".msg").html("...processing bid <i class='fa fa-spinner fa-spin'></i>");
    $(".process_bid").attr("disabled", "disabled");
    $('.lobibox-close').click();
    $.ajax({
        url: "https://redan.quantumcloud.ng/api/bidLoad",
        type: "GET",
        dataType: 'jsonp',
        timeout: 50000,
        data: { email: email, tid: tid, lid: lid },
        success: function (data) {

            if (data.symbol > 0) {
                if (data.bid == 1) { var bidIcon = "<i class='fa fa-gavel text-success'></i>"; } else { var bidIcon = ""; };
                $("#lcode").append(" " + bidIcon);
                $(".msg").html("<span class='alert alert-success p-2'>" + data.msg + "</span>");
            } else {


                $(".msg").html("<span class='alert alert-danger p-2'>" + data.msg + "</span>");
            }

            $(".process_bid").removeAttr("disabled");

        },
        error: function (request, status, err) {
            if (status == "timeout") {

                $(".process_bid").removeAttr("disabled");
                $(".msg").html("<span class='alert alert-danger p-2'>Slow Network!</span>");

            } else {

                $(".process_bid").removeAttr("disabled");
                $(".msg").html("<span class='alert alert-danger p-2'>Error connecting Server!</span>");

            }
        }
    });
    setTimeout(function () { $(".msg").html(''); }, delay);
}

////// save plan
function saveMBP() {
    //alert("ok")
    var pid = localStorage.pid;
    var email = localStorage.email;
    var delay = 6000;

    $(".msg").html('<i class="fa fa-spinner fa-spin" style="font-size:24px"></i> ');
    $.ajax({
        url: host + "/api/saveMBP",
        type: "GET",
        dataType: 'jsonp',
        timeout: 5000,
        data: { email: email, pid: pid },
        success: function (data) {
            //console.log(data.msg);
            if (data.symbol > 0) {

                $(".msg").html("<span class='alert alert-success p-2'>" + data.msg + "</span>");


            } else {
                $(".msg").html("<span class='alert alert-danger p-2'>" + data.msg + "</span>");

            }

        },
        error: function (request, status, err) {
            if (status == "timeout") {
                $(".msg").html("<span class='alert alert-danger p-2'>Slow Network!</span>");

            } else {
                $(".msg").html("<span class='alert alert-danger p-2'>Error connecting Server!</span>");

            }
        }
    });
    setTimeout(function () { $(".msg").html(''); }, delay);
}

//// fetch user
function callUser1(e, v) {

    var email = e;
    var eid = v;

    $(".msg").html('<i class="fa fa-spinner fa-spin" style="font-size:24px"></i> ');
    $.ajax({
        url: "https://api.restscene.com/profile",
        type: "GET",
        dataType: 'jsonp',
        timeout: 50000,
        data: { email: email, eid: eid },
        success: function (data) {
            console.log(data.message);
            if (data.symbol > 0) {
                $(".msg").html('');
                document.getElementById("p_phone").value = data.phone;
                document.getElementById("v_phone").value = data.phone;
                document.getElementById("p_fname").value = data.fname + ' ' + data.lname;
                formatPhone(data.phone);

            } else {
                $(".msg").html("<span class='alert alert-danger p-2'>" + data.message + "</span>");
                var urlx = data.url;
                var delay = 5000;
                setTimeout(function () { window.top.location.href = urlx; }, delay);
            }

        },
        error: function (request, status, err) {
            if (status == "timeout") {
                $(".msg").html("<span class='alert alert-danger p-2'>Slow Network!</span>");
                var urlx = data.url;
                var delay = 5000;
                setTimeout(function () { window.top.location.href = urlx; }, delay);
            } else {
                $(".msg").html("<span class='alert alert-danger p-2'>Error connecting Server!</span>");
                var urlx = data.url;
                var delay = 5000;
                setTimeout(function () { window.top.location.href = urlx; }, delay);
            }
        }
    });

}


////update pwd
function updatePwd() {

    var pwd = document.getElementById("pwd").value;
    var pwd_ = document.getElementById("pwd_").value;
    $(".msg").html('<i class="fa fa-spinner fa-spin"></i> ');
    $(".process_doc").val("...processing");
    $(".process_doc").attr("disabled", "disabled");
    var delay = 5000
    $.ajax({
        url: host + "/api/pwdUpdate",
        type: "GET",
        dataType: 'jsonp',
        timeout: 50000,
        data: { email: localStorage.email, pwd: pwd, pwd_: pwd_ },
        success: function (data) {
            console.log(data.msg);
            if (data.symbol > 0) {

                $(".msg").html("<span class='alert alert-success p-2'>" + data.msg + "</span>");
                $(".process_doc").val("Update Password");
                $(".process_doc").removeAttr("disabled");
                logout();
                /*setTimeout(function(){ window.top.location.href= urlx; }, delay);	*/
            } else {
                $(".msg").html("<span class='alert alert-danger p-2'>" + data.msg + "</span>");
                $(".process_doc").val("Update Password");
                $(".process_doc").removeAttr("disabled");
            }

        },
        error: function (request, status, err) {
            if (status == "timeout") {
                $(".msg").html("<span class='alert alert-danger p-2'> Slow Network! </span>");
                $(".process_doc").val("Update Password");
                $(".process_doc").removeAttr("disabled");
            } else {
                $(".msg").html("<span class='alert alert-danger p-2'> Error connecting Server! </span>");
                $(".process_doc").val("Update Password");
                $(".process_doc").removeAttr("disabled");
            }
        }
    });

    setTimeout(function () { $(".msg").html(''); }, delay);



}

// fetch property categories
function callPropCats(p) {

    $(".msg").html('<i class="fa fa-spinner fa-spin" style="font-size:24px"></i> ');
    $.ajax({
        url: "https://api.restscene.com/propertyCategories",
        type: "GET",
        dataType: 'jsonp',
        timeout: 10000,
        data: { pty: "restscene" },
        success: function (data) {
            document.getElementById("p_cat").innerHTML = data.option;
            $(".msg").html('');
            if (p > 0) {
                prop1(p);
            }
        },
        error: function (request, status, err) {
            if (status == "timeout") {
                $(".msg").html("<span class='alert alert-danger p-2'>Slow Network!</span>");
                var urlx = data.url;
                var delay = 5000;
                setTimeout(function () { window.top.location.href = urlx; }, delay);
            } else {
                $(".msg").html("<span class='alert alert-danger p-2'>Error connecting Server!</span>");
                var urlx = data.url;
                var delay = 5000;
                setTimeout(function () { window.top.location.href = urlx; }, delay);
            }
        }
    });

}


// fetch room categories
function callRoomCats(r) {

    $(".msg").html('<i class="fa fa-spinner fa-spin" style="font-size:24px"></i> ');
    $.ajax({
        url: "https://api.restscene.com/roomCategories",
        type: "GET",
        dataType: 'jsonp',
        timeout: 10000,
        data: { pty: "restscene" },
        success: function (data) {
            document.getElementById("r_type").innerHTML = data.option;
            $(".msg").html('');
            if (r > 0) {
                room1(r);
            }
        },
        error: function (request, status, err) {
            if (status == "timeout") {
                $(".msg").html("<span class='alert alert-danger p-2'>Slow Network!</span>");
                var urlx = data.url;
                var delay = 5000;
                setTimeout(function () { window.top.location.href = urlx; }, delay);
            } else {
                $(".msg").html("<span class='alert alert-danger p-2'>Error connecting Server!</span>");
                var urlx = data.url;
                var delay = 5000;
                setTimeout(function () { window.top.location.href = urlx; }, delay);
            }
        }
    });

}


// fetch property categories
function callPropSubCats(e) {

    $(".msg").html('<i class="fa fa-spinner fa-spin" style="font-size:24px"></i> ');
    $.ajax({
        url: "https://api.restscene.com/propertySubCategories",
        type: "GET",
        dataType: 'jsonp',
        timeout: 10000,
        data: { cat: e },
        success: function (data) {
            document.getElementById("p_sub_cat").innerHTML = data.option;
            $(".msg").html('');
            document.getElementById("p_sub_cat_span").innerHTML = "";
        },
        error: function (request, status, err) {
            if (status == "timeout") {
                $(".msg").html("<span class='alert alert-danger p-2'>Slow Network!</span>");
                var urlx = data.url;
                var delay = 5000;
                setTimeout(function () { window.top.location.href = urlx; }, delay);
            } else {
                $(".msg").html("<span class='alert alert-danger p-2'>Error connecting Server!</span>");
                var urlx = data.url;
                var delay = 5000;
                setTimeout(function () { window.top.location.href = urlx; }, delay);
            }
        }
    });

}



/////////////// call user profile
function callProfile(e, v) {

    $.ajax({
        url: host + "/api/profile/",
        type: "GET", //request type,
        dataType: 'jsonp',
        timeout: 50000,
        data: { email: e, eid: v },
        success: function (data) {

            //$("input[type=text]").removeClass("spinner-grow");				 				 
            document.getElementById("u_fname").value = data.fname;
            document.getElementById("u_lname").value = data.lname;
            document.getElementById("u_mname").value = data.mname;
            document.getElementById("u_email").value = data.email;
            document.getElementById("u_phone").value = data.phone;
            document.getElementById("r_phone").value = data.phone;

            //alert(data.phone)			 		
            //document.getElementById("u_country").value = data.country;
            if (data.state) {
                document.getElementById("u_state").innerHTML += "<option  value='" + data.state + "' selected >" + data.state + "</options>";
            }
            if (data.gender) {
                document.getElementById("gender").innerHTML += "<option  value='" + data.gender + "' selected >" + data.gender + "</options>";
            }
            if (data.pvc) {
                document.getElementById("pvc").innerHTML += "<option  value='" + data.pvc + "' selected >" + data.pvc + "</options>";
            }
            //document.getElementById("u_city").value = data.city;
            document.getElementById("u_address").value = data.address;
            //document.getElementById("u_zip").value = data.zip;	
            formatPhone(data.phone)

            document.getElementById("p_fname").innerHTML = data.fname + " " + data.lname;
            document.getElementById("p_email").innerHTML = data.email;
            if (data.phone) {
                document.getElementById("p_phone").innerHTML = data.phone;
            } else {
                document.getElementById("p_phone").innerHTML = "";
            }
            if (data.address) {
                document.getElementById("p_address").innerHTML = data.address.replace(/^"(.+(?="$))"$/, '$1');
            } else {
                document.getElementById("p_address").innerHTML = "";
            }

        },
        error: function (request, status, err) {
            if (status == "timeout") {
                Lobibox.notify('default', {
                    size: 'mini',
                    position: 'center top',
                    msg: 'Your connection is slow!'
                });

            } else {

                Lobibox.notify('default', {
                    size: 'mini',
                    position: 'center top',
                    msg: 'Error connecting Server!'
                    //msg:'Error: ' + request + status + err 
                });
            }
        }

    });

}



function callProp(p) {

    //$("input[type=text]").addClass("spinner-grow");
    $(".msg").html('<i class="fa fa-spinner fa-spin" style="font-size:24px"></i> ');
    if (p) {
        $.ajax({
            url: "https://api.restscene.com/property/",
            type: "GET", //request type,
            dataType: 'jsonp',
            timeout: 50000,
            data: { pid: p },
            success: function (data) {

                $(".msg").html('');
                try {
                    document.getElementById('u_state_label').innerHTML = 'State <i class="fa fa-refresh" aria-hidden="true" style="cursor:pointer; color:#0F0; margin-right:-25px"  id="u_state_r" ></i>'
                    $("i#u_state_r").on('click', function () {
                        callStates();
                    });
                } catch (e) {
                    return false;
                }

                //$("input[type=text]").removeClass("spinner-grow");				 				 
                document.getElementById("p_desn").value = data.desn;
                //alert(data.phone)			 		
                document.getElementById("u_country").value = data.country;
                if (data.state) {
                    document.getElementById("u_state").innerHTML = "<option  value='" + data.state + "' selected >" + data.state.split(',')[1] + "</options>";
                }
                document.getElementById("p_city").value = data.city;
                document.getElementById("p_address").value = data.address;
                document.getElementById("p_zip").value = data.zip;


                if (data.address) {
                    document.getElementById("p_address").value = data.address.replace(/^"(.+(?="$))"$/, '$1');
                } else {
                    document.getElementById("p_address").value = "";
                }

            },
            error: function (request, status, err) {
                if (status == "timeout") {
                    $(".msg").html('');
                    var urlx = data.url;
                    var delay = 5000;
                    setTimeout(function () { window.top.location.href = urlx; }, delay);

                } else {
                    $(".msg").html('');
                    var urlx = data.url;
                    var delay = 5000;
                    setTimeout(function () { window.top.location.href = urlx; }, delay);
                }
            }

        });

    }

}


//call states
function callStates() {

    var country = document.getElementById("u_country").value;
    $("#u_state").attr("disabled", "disabled");
    document.getElementById('u_state_label').innerHTML = "...processing <i class='fa fa-spinner fa-spin'></i>";
    $.ajax({
        url: "https://api.restscene.com/getStates/", //the page containing php script
        type: "GET", //request type,
        dataType: 'jsonp',
        timeout: 50000,
        // data: {dist:a, lat:b, long:c},
        data: { country: country },
        success: function (data) {
            //$("#loading").hide();
            //$('#loc-btn').show();
            //$('.card').show();
            document.getElementById('u_state_label').innerHTML = "State"
            $("#u_state").removeAttr("disabled");
            document.getElementById('u_state').innerHTML = data.option;
            /*Lobibox.notify('default', {
                    size: 'mini',
                    position: 'center top',
                    msg: data.num +" results found!"
                      });*/
        },
        error: function (request, status, err) {
            if (status == "timeout") {
                document.getElementById('u_state_label').innerHTML = 'State <i class="fa fa-refresh" aria-hidden="true" style="cursor:pointer; color:#0F0; margin-right:-25px"  id="u_state_r" ></i>'
                Lobibox.notify('default', {
                    size: 'mini',
                    position: 'center top',
                    msg: 'Your connection is slow!'
                });

                $("i#u_state_r").on('click', function () {
                    callStates();
                });

            } else {
                // another error occured 
                document.getElementById('u_state_label').innerHTML = 'State <i class="fa fa-refresh" aria-hidden="true" style="cursor:pointer; color:#0F0; margin-right:-25px"  id="u_state_r" ></i>'
                Lobibox.notify('default', {
                    size: 'mini',
                    position: 'center top',
                    msg: 'Error connecting Server!'
                    //msg:'Error: ' + request + status + err 
                });

                $("i#u_state_r").on('click', function () {
                    callStates();
                });

            }
        }

    });
}


/// update profile	
function updateProfile() {

    //$('#u_phone').click();
    var fname = document.getElementById("u_fname").value;
    var lname = document.getElementById("u_lname").value;
    var mname = document.getElementById("u_mname").value;
    var email = document.getElementById("u_email").value;
    var phone = document.getElementById("r_phone").value;
    var state = document.getElementById("u_state").value;
    var gender = document.getElementById("gender").value;
    /*var city = document.getElementById("u_city").value;*/
    var address = document.getElementById("u_address").value;
    var pvc = document.getElementById("pvc").value;
    //var zip = document.getElementById("u_zip").value;

    $(".process_doc").val("...processing");
    $(".update_doc").attr("disabled", "disabled");
    $.ajax({
        url: host + "/api/profileUpdate",
        type: "GET",
        dataType: 'jsonp',
        timeout: 50000,
        data: { email: email, lname: lname, fname: fname, mname: mname, gender: gender, phone: phone, state: state, address: address, pvc: pvc },
        success: function (data) {
            callProfile(localStorage.email, localStorage.eid)
            $(".process_doc").val("Update User Profile");
            $("input[type=submit]").removeAttr("disabled");
            Lobibox.notify('default', {
                size: 'mini',
                position: 'center top',
                msg: data.msg
                //msg:'Error: ' + request + status + err 
            });
        },
        error: function (request, status, err) {
            if (status == "timeout") {
                $(".process_doc").val("Update User Profile");
                $("input[type=submit]").removeAttr("disabled");
                Lobibox.notify('default', {
                    size: 'mini',
                    position: 'center top',
                    msg: "Your connection is slow!"
                    //msg:'Error: ' + request + status + err 
                });
            } else {
                $(".process_doc").val("Update User Profile");
                $("input[type=submit]").removeAttr("disabled");
                Lobibox.notify('default', {
                    size: 'mini',
                    position: 'center top',
                    msg: "Error connecting to server!"
                    //msg:'Error: ' + request + status + err 
                });
            }
        }
    });

}




/// add new property: stage 1
function addNewProperty() {

    //$('#u_phone').click();
    var pvalue = document.getElementById("pvalue").value;
    var pname = document.getElementById("p_name").value;
    var pfname = document.getElementById("p_fname").value;
    var vphone = document.getElementById("v_phone").value;
    var vphone2 = document.getElementById("v_phone2").value;
    var pcat = document.getElementById("p_cat").value;
    var psubcat = document.getElementById("p_sub_cat").value;
    var email = localStorage.email;

    if (email) {
        //alert(email)

        $(".process_doc").html("...processing <i class='fa fa-spinner fa-spin'></i>");
        $(".process_doc").attr("disabled", "disabled");
        $.ajax({
            url: "https://api.restscene.com/propertyNew",
            type: "GET",
            dataType: 'jsonp',
            timeout: 50000,
            data: { email: email, pname: pname, pfname: pfname, vphone: vphone, vphone2: vphone2, pcat: pcat, psubcat: psubcat, pvalue: pvalue },
            success: function (data) {

                if (data.symbol > 0) {
                    var urlx = data.url;
                    localStorage.pid = data.pID;
                    var delay = 5000;
                    setTimeout(function () { location.href = urlx; }, delay);
                    $(".process_doc").html('<i class="icon-arrow-right"></i> Continue');
                    //$(".process_doc").removeAttr("disabled"); 
                    $(".msg").html("<span class='alert alert-success p-2'>" + data.msg + "</span>");
                } else {

                    /*var urlx = data.url;				 		
                    var delay = 5000; 
                    setTimeout(function(){ window.top.location.href= urlx; }, delay);*/
                    $(".process_doc").html('<i class="icon-arrow-right"></i> Continue');
                    $(".process_doc").removeAttr("disabled");
                    $(".msg").html("<span class='alert alert-danger p-2'>" + data.msg + "</span>");

                }

            },
            error: function (request, status, err) {
                if (status == "timeout") {
                    $(".process_doc").html('<i class="icon-arrow-right"></i> Continue');
                    $(".process_doc").removeAttr("disabled");
                    $(".msg").html("<span class='alert alert-danger p-2'>Slow Network!</span>");

                } else {
                    $(".process_doc").html('<i class="icon-arrow-right"></i> Continue');
                    $(".process_doc").removeAttr("disabled");
                    $(".msg").html("<span class='alert alert-danger p-2'>Error connecting Server!</span>");

                }
            }
        });
    }
}



/// add new property: stage 2
function addNewProperty2() {

    //$('#u_phone').click();
    var pid = localStorage.pid;
    var desn = document.getElementById("p_desn").value;
    var country = document.getElementById("u_country").value;
    var state = document.getElementById("u_state").value;
    var city = document.getElementById("p_city").value;
    var address = document.getElementById("p_address").value;
    var zip = document.getElementById("p_zip").value;
    var email = localStorage.email;

    if (email && pid) {
        //alert(email)

        $(".process_doc").html("...processing <i class='fa fa-spinner fa-spin'></i>");
        $(".process_doc").attr("disabled", "disabled");
        $.ajax({
            url: "https://api.restscene.com/propertyUpdate2",
            type: "GET",
            dataType: 'jsonp',
            timeout: 50000,
            data: { email: email, pid: pid, desn: desn, country: country, state: state, city: city, address: address, zip: zip },
            success: function (data) {

                if (data.symbol > 0) {
                    var urlx = data.url;
                    var delay = 5000;
                    setTimeout(function () { location.href = urlx; }, delay);
                    $(".process_doc").html('<i class="icon-arrow-right"></i> Continue');
                    //$(".process_doc").removeAttr("disabled"); 
                    $(".msg").html("<span class='alert alert-success p-2'>" + data.msg + "</span>");
                } else {
                    var urlx = data.url;
                    var delay = 5000;
                    // setTimeout(function(){ window.top.location.href= urlx; }, delay);
                    $(".process_doc").html('<i class="icon-arrow-right"></i> Continue');
                    $(".process_doc").removeAttr("disabled");
                    $(".msg").html("<span class='alert alert-danger p-2'>" + data.msg + "</span>");

                }

            },
            error: function (request, status, err) {
                if (status == "timeout") {
                    $(".process_doc").html('<i class="icon-arrow-right"></i> Continue');
                    $(".process_doc").removeAttr("disabled");
                    $(".msg").html("<span class='alert alert-danger p-2'>Slow Network!</span>");

                } else {
                    $(".process_doc").html('<i class="icon-arrow-right"></i> Continue');
                    $(".process_doc").removeAttr("disabled");
                    $(".msg").html("<span class='alert alert-danger p-2'>Error connecting Server!</span>");

                }
            }
        });
    }
}

/// add new property: stage 3
function addNewProperty3() {

    //$('#u_phone').click();
    var pid = localStorage.pid;
    var amen = $('#amen').val();
    var lang = document.getElementById("u_lang").value;
    var email = localStorage.email;

    if (email && pid) {
        //alert(email)

        $(".process_doc").html("...processing <i class='fa fa-spinner fa-spin'></i>");
        $(".process_doc").attr("disabled", "disabled");
        $.ajax({
            url: "https://api.restscene.com/propertyUpdate3",
            type: "GET",
            dataType: 'jsonp',
            timeout: 50000,
            data: { email: email, pid: pid, amen: amen, lang: lang },
            success: function (data) {

                if (data.symbol > 0) {
                    var urlx = data.url;
                    var delay = 5000;
                    setTimeout(function () { window.top.location.href = urlx; }, delay);
                    $(".process_doc").html('<i class="icon-arrow-right"></i> COMPLETED');
                    //$(".process_doc").removeAttr("disabled"); 
                    $(".msg").html("<span class='alert alert-success p-2'>" + data.msg + "</span>");
                } else {
                    var urlx = data.url;
                    var delay = 5000;
                    // setTimeout(function(){ window.top.location.href= urlx; }, delay);
                    $(".process_doc").html('<i class="icon-arrow-right"></i> Continue');
                    $(".process_doc").removeAttr("disabled");
                    $(".msg").html("<span class='alert alert-danger p-2'>" + data.msg + "</span>");

                }

            },
            error: function (request, status, err) {
                if (status == "timeout") {
                    $(".process_doc").html('<i class="icon-arrow-right"></i> Continue');
                    $(".process_doc").removeAttr("disabled");
                    $(".msg").html("<span class='alert alert-danger p-2'>Slow Network!</span>");

                } else {
                    $(".process_doc").html('<i class="icon-arrow-right"></i> Continue');
                    $(".process_doc").removeAttr("disabled");
                    $(".msg").html("<span class='alert alert-danger p-2'>Error connecting Server!</span>");

                }
            }
        });
    }
}


/// add new room: stage 1
function addNewRoom() {
    //$('#u_phone').click();
    var rvalue = document.getElementById("rvalue").value;
    var rname = document.getElementById("r_name").value;
    var pid = document.getElementById("r_prop").value.split(',')[0];
    var rtype = document.getElementById("r_type").value;
    var rno = document.getElementById("r_no").value;
    var rguest = document.getElementById("r_guest").value;
    var rprice = document.getElementById("r_price").value;
    var rperiod = document.getElementById("r_period").value;
    var email = localStorage.email;

    if (email) {

        $(".process_doc").html("...processing <i class='fa fa-spinner fa-spin'></i>");
        $(".process_doc").attr("disabled", "disabled");
        $.ajax({
            url: "https://api.restscene.com/roomNew",
            type: "GET",
            dataType: 'jsonp',
            timeout: 50000,
            data: { email: email, rname: rname, pid: pid, rno: rno, rtype: rtype, rguest: rguest, rprice: rprice, rperiod: rperiod, rvalue: rvalue },
            success: function (data) {
                if (data.symbol > 0) {
                    var urlx = data.url;
                    localStorage.rid = data.rID;
                    localStorage.pid = data.pID;
                    var delay = 5000;
                    setTimeout(function () { location.href = urlx; }, delay);
                    $(".process_doc").html('<i class="icon-arrow-right"></i> Continue');
                    //$(".process_doc").removeAttr("disabled"); 
                    $(".msg").html("<span class='alert alert-success p-2'>" + data.msg + "</span>");
                } else {

                    /* var urlx = data.url;
                     localStorage.pid = data.pID;		
                     var delay = 5000; 
                     setTimeout(function(){ window.top.location.href= urlx; }, delay);*/
                    $(".process_doc").html('<i class="icon-arrow-right"></i> Continue');
                    $(".process_doc").removeAttr("disabled");
                    $(".msg").html("<span class='alert alert-danger p-2'>" + data.msg + "</span>");
                }

            },
            error: function (request, status, err) {
                if (status == "timeout") {
                    $(".process_doc").html('<i class="icon-arrow-right"></i> Continue');
                    $(".process_doc").removeAttr("disabled");
                    $(".msg").html("<span class='alert alert-danger p-2'>Slow Network!</span>");

                } else {
                    $(".process_doc").html('<i class="icon-arrow-right"></i> Continue');
                    $(".process_doc").removeAttr("disabled");
                    $(".msg").html("<span class='alert alert-danger p-2'>Error connecting Server!</span>");

                }
            }
        });
    }
}



/// add new room: stage 2
function addNewRoom2() {

    //$('#u_phone').click();
    var rid = localStorage.rid;
    var r_smoking = document.getElementById("r_smoking").value;
    var r_cancel = document.getElementById("r_cancel").value;
    var r_cancel_opt = document.getElementById("r_cancel_opt").value;
    var r_checkin = document.getElementById("r_checkin").value;
    var r_checkout = document.getElementById("r_checkout").value;
    var r_children = document.getElementById("r_children").value;
    var r_pets = document.getElementById("r_pets").value;
    var email = localStorage.email;

    if (email && rid) {
        //alert(email)

        $(".process_doc").html("...processing <i class='fa fa-spinner fa-spin'></i>");
        $(".process_doc").attr("disabled", "disabled");
        $.ajax({
            url: "https://api.restscene.com/roomUpdate2",
            type: "GET",
            dataType: 'jsonp',
            timeout: 50000,
            data: { email: email, rid: rid, r_smoking: r_smoking, r_cancel: r_cancel, r_cancel_opt: r_cancel_opt, r_checkin: r_checkin, r_checkout: r_checkout, r_children: r_children, r_pets: r_pets },
            success: function (data) {

                if (data.symbol > 0) {
                    var urlx = data.url;
                    var delay = 5000;
                    setTimeout(function () { location.href = urlx; }, delay);
                    $(".process_doc").html('<i class="icon-arrow-right"></i> Continue');
                    //$(".process_doc").removeAttr("disabled"); 
                    $(".msg").html("<span class='alert alert-success p-2'>" + data.msg + "</span>");
                } else {
                    var urlx = data.url;
                    var delay = 5000;
                    // setTimeout(function(){ window.top.location.href= urlx; }, delay);
                    $(".process_doc").html('<i class="icon-arrow-right"></i> Continue');
                    $(".process_doc").removeAttr("disabled");
                    $(".msg").html("<span class='alert alert-danger p-2'>" + data.msg + "</span>");

                }

            },
            error: function (request, status, err) {
                if (status == "timeout") {
                    $(".process_doc").html('<i class="icon-arrow-right"></i> Continue');
                    $(".process_doc").removeAttr("disabled");
                    $(".msg").html("<span class='alert alert-danger p-2'>Slow Network!</span>");

                } else {
                    $(".process_doc").html('<i class="icon-arrow-right"></i> Continue');
                    $(".process_doc").removeAttr("disabled");
                    $(".msg").html("<span class='alert alert-danger p-2'>Error connecting Server!</span>");

                }
            }
        });
    }
}




/// add new room: stage 3
function addNewRoom3() {

    //$('#u_phone').click();
    var rid = localStorage.rid;
    var r_amen = $('#amen').val();
    var r_card = document.getElementById("r_card").value;
    var email = localStorage.email;

    if (email && rid) {
        //alert(email)

        $(".process_doc").html("...processing <i class='fa fa-spinner fa-spin'></i>");
        $(".process_doc").attr("disabled", "disabled");
        $.ajax({
            url: "https://api.restscene.com/roomUpdate3",
            type: "GET",
            dataType: 'jsonp',
            timeout: 50000,
            data: { email: email, rid: rid, r_amen: r_amen, r_card: r_card },
            success: function (data) {

                if (data.symbol > 0) {
                    var urlx = data.url;
                    var delay = 5000;
                    setTimeout(function () { window.top.location.href = urlx; }, delay);
                    $(".process_doc").html('<i class="icon-arrow-right"></i> COMPLETED');
                    //$(".process_doc").removeAttr("disabled"); 
                    $(".msg").html("<span class='alert alert-success p-2'>" + data.msg + "</span>");
                } else {
                    var urlx = data.url;
                    var delay = 5000;
                    // setTimeout(function(){ window.top.location.href= urlx; }, delay);
                    $(".process_doc").html('<i class="icon-arrow-right"></i> Continue');
                    $(".process_doc").removeAttr("disabled");
                    $(".msg").html("<span class='alert alert-danger p-2'>" + data.msg + "</span>");

                }

            },
            error: function (request, status, err) {
                if (status == "timeout") {
                    $(".process_doc").html('<i class="icon-arrow-right"></i> Continue');
                    $(".process_doc").removeAttr("disabled");
                    $(".msg").html("<span class='alert alert-danger p-2'>Slow Network!</span>");

                } else {
                    $(".process_doc").html('<i class="icon-arrow-right"></i> Continue');
                    $(".process_doc").removeAttr("disabled");
                    $(".msg").html("<span class='alert alert-danger p-2'>Error connecting Server!</span>");

                }
            }
        });
    }
}

//// get property phase1
function prop1(p) {
    var pid = p;
    //$("input[type=text]").addClass("spinner-grow");
    $(".msg").html = " <i class='fa fa-spinner fa-spin'></i>"
    $.ajax({
        url: "https://api.restscene.com/property/",
        type: "GET", //request type,
        dataType: 'jsonp',
        timeout: 50000,
        // data: {dist:a, lat:b, long:c},
        data: { pid: pid },
        success: function (data) {
            //$("input[type=text]").removeClass("spinner-grow");	

            document.getElementById("p_name").value = data.p_name;
            document.getElementById("p_cat").value = data.cat;
            document.getElementById("p_sub_cat").innerHTML = "<option value='" + data.subcat + "'>" + data.subcat.split(",")[1] + "</option>";
            document.getElementById("p_fname").value = data.p_fname;
            document.getElementById("p_phone").value = data.p_phone;
            document.getElementById("v_phone").value = data.p_phone;
            document.getElementById("p_phone2").value = data.p_phone2;
            document.getElementById("v_phone2").value = data.p_phone2;
            formatPhone(data.p_phone);
            $(".msg").html = "";
        },
        error: function (request, status, err) {
            if (status == "timeout") {
                $(".msg").html('<div class ="alert alert-danger p-2">Your connection is slow!</div>');

            } else {

                $(".msg").html('<div class ="alert alert-danger p-2">Error connecting Server!</div>');

            }
        }

    });

}

//// get property phase2
function prop2(p) {
    var rid = r;
    //$("input[type=text]").addClass("spinner-grow");
    document.getElementById("msg").innerHTML = " <i class='fa fa-spinner fa-spin'></i>"
    $.ajax({
        url: "https://api.restscene.com/room/",
        type: "GET", //request type,
        dataType: 'jsonp',
        timeout: 50000,
        // data: {dist:a, lat:b, long:c},
        data: { rid: rid },
        success: function (data) {
            //$("input[type=text]").removeClass("spinner-grow");				 				 
            document.getElementById("r_smoking").value = data.r_smoking;
            document.getElementById("r_cancel").value = data.r_cancel;
            document.getElementById("r_cancel_opt").value = data.r_cancel_opt;
            document.getElementById("r_checkin").value = data.r_checkin;
            document.getElementById("r_checkout").value = data.r_checkout;
            document.getElementById("r_children").value = data.r_children;
            document.getElementById("r_pets").value = data.r_pets;
            //document.getElementById("r_type").innerHTML = "<option value='"+data.r_type+"' selected>"+data.r_type+"</option>";				
            //$('select#r_type').val(data.r_type).trigger('change');				 
            //$("select#r_type").children("option:selected").val(data.r_type).change();				 
            document.getElementById("msg").innerHTML = "";
        },
        error: function (request, status, err) {
            if (status == "timeout") {
                $(".msg").html('<div class ="alert alert-danger p-2">Your connection is slow!</div>');

            } else {

                $(".msg").html('<div class ="alert alert-danger p-2">Error connecting Server!</div>');

            }
        }

    });

}

//// get property phase3
function prop3(p) {
    var pid = p;
    //$("input[type=text]").addClass("spinner-grow");
    document.getElementById("msg").innerHTML = " <i class='fa fa-spinner fa-spin'></i>"
    $.ajax({
        url: "https://api.restscene.com/property/",
        type: "GET", //request type,
        dataType: 'jsonp',
        timeout: 50000,
        // data: {dist:a, lat:b, long:c},
        data: { pid: pid },
        success: function (data) {
            //$("input[type=text]").removeClass("spinner-grow");				 				 
            document.getElementById("u_lang").value = data.p_lang;
            //document.getElementById("r_amen").value = data.r_amen;
            if (data.p_amen) {
                var issue = data.p_amen.split(',');
                $('#u_amen').val(issue).trigger('change');
            }
            //document.getElementById("r_type").innerHTML = "<option value='"+data.r_type+"' selected>"+data.r_type+"</option>";				
            //$('select#r_type').val(data.r_type).trigger('change');				 
            //$("select#r_type").children("option:selected").val(data.r_type).change();				 
            document.getElementById("msg").innerHTML = "";
        },
        error: function (request, status, err) {
            if (status == "timeout") {
                $(".msg").html('<div class ="alert alert-danger p-2">Your connection is slow!</div>');

            } else {

                $(".msg").html('<div class ="alert alert-danger p-2">Error connecting Server!</div>');

            }
        }

    });

}

//// get room phase1
function room1(r) {
    var rid = r;
    //$("input[type=text]").addClass("spinner-grow");
    document.getElementById("msg").innerHTML = " <i class='fa fa-spinner fa-spin'></i>"
    $.ajax({
        url: "https://api.restscene.com/room/",
        type: "GET", //request type,
        dataType: 'jsonp',
        timeout: 50000,
        // data: {dist:a, lat:b, long:c},
        data: { rid: rid },
        success: function (data) {
            //$("input[type=text]").removeClass("spinner-grow");				 				 
            document.getElementById("r_name").value = data.r_name;
            document.getElementById("r_prop").value = data.pID;
            //document.getElementById("r_type").innerHTML = "<option value='"+data.r_type+"' selected>"+data.r_type+"</option>";				
            //$('select#r_type').val(data.r_type).trigger('change');
            document.getElementById("r_type").value = data.r_type;
            //$("select#r_type").children("option:selected").val(data.r_type).change();	
            document.getElementById("r_no").value = data.r_no;
            document.getElementById("r_guest").value = data.r_no;
            document.getElementById("r_price").value = data.r_price;
            document.getElementById("r_period").value = data.r_period;
            document.getElementById("msg").innerHTML = "";
        },
        error: function (request, status, err) {
            if (status == "timeout") {
                $(".msg").html('<div class ="alert alert-danger p-2">Your connection is slow!</div>');

            } else {

                $(".msg").html('<div class ="alert alert-danger p-2">Error connecting Server!</div>');

            }
        }

    });

}

//// get room phase2
function room2(r) {
    var rid = r;
    //$("input[type=text]").addClass("spinner-grow");
    document.getElementById("msg").innerHTML = " <i class='fa fa-spinner fa-spin'></i>"
    $.ajax({
        url: "https://api.restscene.com/room/",
        type: "GET", //request type,
        dataType: 'jsonp',
        timeout: 50000,
        // data: {dist:a, lat:b, long:c},
        data: { rid: rid },
        success: function (data) {
            //$("input[type=text]").removeClass("spinner-grow");				 				 
            document.getElementById("r_smoking").value = data.r_smoking;
            document.getElementById("r_cancel").value = data.r_cancel;
            document.getElementById("r_cancel_opt").value = data.r_cancel_opt;
            document.getElementById("r_checkin").value = data.r_checkin;
            document.getElementById("r_checkout").value = data.r_checkout;
            document.getElementById("r_children").value = data.r_children;
            document.getElementById("r_pets").value = data.r_pets;
            //document.getElementById("r_type").innerHTML = "<option value='"+data.r_type+"' selected>"+data.r_type+"</option>";				
            //$('select#r_type').val(data.r_type).trigger('change');				 
            //$("select#r_type").children("option:selected").val(data.r_type).change();				 
            document.getElementById("msg").innerHTML = "";
        },
        error: function (request, status, err) {
            if (status == "timeout") {
                $(".msg").html('<div class ="alert alert-danger p-2">Your connection is slow!</div>');

            } else {

                $(".msg").html('<div class ="alert alert-danger p-2">Error connecting Server!</div>');

            }
        }

    });

}

//// get room phase3
function room3(r) {
    var rid = r;
    //$("input[type=text]").addClass("spinner-grow");
    document.getElementById("msg").innerHTML = " <i class='fa fa-spinner fa-spin'></i>"
    $.ajax({
        url: "https://api.restscene.com/room/",
        type: "GET", //request type,
        dataType: 'jsonp',
        timeout: 50000,
        // data: {dist:a, lat:b, long:c},
        data: { rid: rid },
        success: function (data) {
            //$("input[type=text]").removeClass("spinner-grow");				 				 
            document.getElementById("r_card").value = data.r_card;
            //document.getElementById("r_amen").value = data.r_amen;
            if (data.r_amen) {
                var issue = data.r_amen.split(',');
                $('#r_amen').val(issue).trigger('change');
            }
            //document.getElementById("r_type").innerHTML = "<option value='"+data.r_type+"' selected>"+data.r_type+"</option>";				
            //$('select#r_type').val(data.r_type).trigger('change');				 
            //$("select#r_type").children("option:selected").val(data.r_type).change();				 
            document.getElementById("msg").innerHTML = "";
        },
        error: function (request, status, err) {
            if (status == "timeout") {
                $(".msg").html('<div class ="alert alert-danger p-2">Your connection is slow!</div>');

            } else {

                $(".msg").html('<div class ="alert alert-danger p-2">Error connecting Server!</div>');

            }
        }

    });

}

//// get room phase3
function room4(r) {
    var rid = r;
    //$("input[type=text]").addClass("spinner-grow");
    document.getElementById("msg").innerHTML = " <i class='fa fa-spinner fa-spin'></i>"
    $.ajax({
        url: "https://api.restscene.com/room/",
        type: "GET", //request type,
        dataType: 'jsonp',
        timeout: 50000,
        // data: {dist:a, lat:b, long:c},
        data: { rid: rid },
        success: function (data) {
            //$("input[type=text]").removeClass("spinner-grow");				 				 
            //document.getElementById("r_card").value = data.r_card;		
            //document.getElementById("r_amen").value = data.r_amen;
            /*if(data.r_amen){
            var issue = data.r_amen.split(',');				 
            $('#r_amen').val(issue).trigger('change');
            }*/
            //document.getElementById("r_type").innerHTML = "<option value='"+data.r_type+"' selected>"+data.r_type+"</option>";				
            //$('select#r_type').val(data.r_type).trigger('change');				 
            //$("select#r_type").children("option:selected").val(data.r_type).change();				 
            document.getElementById("msg").innerHTML = "";
            document.getElementById("r_price").innerHTML = " Price/" + data.r_period + "($): " + data.r_price;
            document.getElementById("price").value = " " + data.r_price;
            document.getElementById("amt").value = ""
            document.getElementById("p_name").innerHTML = data.pID.split(',')[1];
            document.getElementById("r_name").innerHTML = " " + data.r_name;

            if (localStorage.email) {
                document.getElementById("p_fname").value = localStorage.ename;
                document.getElementById("p_email").value = localStorage.email;
                document.getElementById("start").value = localStorage.pSearchStart;
                document.getElementById("end").value = localStorage.pSearchEnd;
                calculateDate();
            }

        },
        error: function (request, status, err) {
            if (status == "timeout") {
                $(".msg").html('<div class ="alert alert-danger p-2">Your connection is slow!</div>');

            } else {

                $(".msg").html('<div class ="alert alert-danger p-2">Error connecting Server!</div>');

            }
        }

    });

}


///show property
function showProps(e) {

    document.getElementById("prop_count").innerHTML = " <i class='fa fa-spinner fa-spin'></i>"
    $("#prop").attr("disabled", "disabled");
    document.getElementById("list_count").innerHTML = " <i class='fa fa-spinner fa-spin'></i>"
    $("#list").attr("disabled", "disabled");
    $.ajax({
        url: "https://api.restscene.com/propertyShows/", //the page containing php script
        type: "GET", //request type,
        dataType: 'jsonp',
        timeout: 50000,
        // data: {dist:a, lat:b, long:c},
        data: { email: e },
        success: function (data) {

            document.getElementById('prop_count').innerHTML = data.count + " Records found";
            document.getElementById('list_count').innerHTML = data.count + " Records found";
            $("#prop").removeAttr("disabled");
            $("#list").removeAttr("disabled");
            document.getElementById('prop').innerHTML = data.option;
            document.getElementById('list').innerHTML = data.option;
        },
        error: function (request, status, err) {
            if (status == "timeout") {
                document.getElementById("prop_count").innerHTML = "<span class='alert alert-danger p-2'>Slow Network</span>";
                document.getElementById("list_count").innerHTML = "<span class='alert alert-danger p-2'>Slow Network</span>";

                document.getElementById('prop_label').innerHTML = 'Properties <i class="fa fa-refresh" aria-hidden="true" style="cursor:pointer; color:#0F0; margin-right:-25px" id="prop_type_r"></i>';
                document.getElementById('list_label').innerHTML = 'Properties <i class="fa fa-refresh" aria-hidden="true" style="cursor:pointer; color:#0F0; margin-right:-25px" id="list_type_r"></i>';

                $("i#prop_type_r").on('click', function () {
                    showProps(e);
                });
                $("i#list_type_r").on('click', function () {
                    showProps(e);
                });


            } else {
                document.getElementById("prop_count").innerHTML = "<span class='alert alert-danger p-2'>Error connecting Server!</span>";
                document.getElementById("list_count").innerHTML = "<span class='alert alert-danger p-2'>Error connecting Server!</span>";

                document.getElementById('prop_label').innerHTML = 'Properties <i class="fa fa-refresh" aria-hidden="true" style="cursor:pointer; color:#0F0; margin-right:-25px" id="prop_type_r"></i>';
                document.getElementById('list_label').innerHTML = 'Properties <i class="fa fa-refresh" aria-hidden="true" style="cursor:pointer; color:#0F0; margin-right:-25px" id="list_type_r"></i>';

                $("i#prop_type_r").on('click', function () {
                    showProps(e)
                });
                $("i#list_type_r").on('click', function () {
                    showProps(e);
                });

            }
        }

    });
}


///show property 2
function showProps2(e) {

    document.getElementById("r_prop_label").innerHTML = " <i class='fa fa-spinner fa-spin'></i> Property"
    $("#r_prop").attr("disabled", "disabled");
    $.ajax({
        url: "https://api.restscene.com/propertyShows/", //the page containing php script
        type: "GET", //request type,
        dataType: 'jsonp',
        timeout: 50000,
        // data: {dist:a, lat:b, long:c},
        data: { email: e },
        success: function (data) {
            document.getElementById('prop_count').innerHTML = data.count + " Records found";
            document.getElementById("r_prop_label").innerHTML = "Property"
            $("#r_prop").removeAttr("disabled");
            document.getElementById('r_prop').innerHTML = data.option;

        },
        error: function (request, status, err) {
            if (status == "timeout") {
                document.getElementById("prop_count").innerHTML = "<span class='alert alert-danger p-2'>Slow Network</span>";
                document.getElementById('r_prop_label').innerHTML = 'Property <i class="fa fa-refresh" aria-hidden="true" style="cursor:pointer; color:#0F0; margin-right:-25px" id="prop_r"></i>';
                $("i#prop_r").on('click', function () {
                    showProps2(e);
                });



            } else {
                document.getElementById("prop_count").innerHTML = "<span class='alert alert-danger p-2'>Error connecting Server!</span>";
                document.getElementById('r_prop_label').innerHTML = 'Property <i class="fa fa-refresh" aria-hidden="true" style="cursor:pointer; color:#0F0; margin-right:-25px" id="prop_r"></i>';
                $("i#prop_r").on('click', function () {
                    showProps2(e);
                });
            }
        }

    });
}


///show property
function showSelectedProp(e) {
    var pid = e.split(',')[0];

    document.getElementById("prop_details").innerHTML = " <i class='fa fa-spinner fa-spin'></i>";
    $("#prop").attr("disabled", "disabled");
    $.ajax({
        url: "https://api.restscene.com/property/", //the page containing php script
        type: "GET", //request type,
        dataType: 'jsonp',
        timeout: 50000,
        // data: {dist:a, lat:b, long:c},
        data: { pid: pid },
        success: function (data) {
            if (data.file) { var pixname = "https://restscene.com/uploads/" + pid + "/" + data.file; } else { var pixname = "https://web.restscene.com/assets/images/bg6.jpg"; }
            document.getElementById('prop_details').innerHTML = "<div class=\"row property-card\"><div style='position:absolute; z-index:10; font-size:20px;' class=\"col-sm-4 text-center\"  ><i class='fa fa-spinner fa-spin mt-5'></i></div><div class=\"col-sm-4 property-card-bg \" style=\"background-image: url('" + pixname + "'); z-index: 11; \"></div><div class='col-sm-8 '><h5 class=\"mt-2 \"><i class='fa fa-home mr-2'></i>" + data.p_name + "</h5><div class=''><i class='fa fa-map-marker mr-2 ml-1'></i>" + data.address + "</div><div class=''><i class='fa fa-phone mr-2 ml-1 mt-2'></i>" + data.p_phone + "</div><hr/><button  class=\"prop-edit\" data-id=\"" + pid + "\" style='font-size:12px; width:150px; margin-top:4px;'>Edit Property <i class='fa fa-edit'></i></button> <button style='font-size:12px; width:150px; margin-top:4px;'>Payment Details <i class='fa fa-credit-card'></i></button> <button style='font-size:12px; width:150px; margin-top:4px;'>Map Property <i class='fa fa-map-marker'></i></button></div></div>";
            $("#prop").removeAttr("disabled");

            //show room modal
            $("button.prop-edit").on('click', function (e) {
                $("#modal-animation-1").modal({ backdrop: 'static', keyboard: false });
                document.getElementById('profileDetails').src = 'add-property.html?p=' + $(this).attr('data-id');
                document.getElementById('profileDetails').height = "480px";

                //event.target.id
                //$("img.sketch").show();	
                //$(".profileDetails").hide();
                //document.getElementById("sketch").src = "images_body/"+$(this).attr('data-id')+".png";	
                //document.getElementById("modal-title").innerHTML = $(this).attr('data-id').toUpperCase();
                document.getElementById("modal-title").innerHTML = "<i class='fa fa-home mr-2'></i><strong>EDIT PROPERTY</strong>";

            });

        },
        error: function (request, status, err) {
            if (status == "timeout") {
                $("#prop").removeAttr("disabled");
                document.getElementById("prop_details").innerHTML = "<span class='alert alert-danger p-2'>Slow Network</span>"



            } else {
                document.getElementById("prop_details").innerHTML = "<span class='alert alert-danger p-2'>Error connecting Server!</span>"


            }
        }

    });
}

///show rooms
function showRooms(e) {
    var pid = e.split(',')[0];

    document.getElementById("list_details").innerHTML = " <i class='fa fa-spinner fa-spin'></i>";
    $("#list").attr("disabled", "disabled");
    $.ajax({
        url: "https://api.restscene.com/rooms/", //the page containing php script
        type: "GET", //request type,
        dataType: 'jsonp',
        timeout: 50000,
        // data: {dist:a, lat:b, long:c},
        data: { pid: pid },
        success: function (data) {
            document.getElementById("list_details").innerHTML = "";
            $.each(data.rid, function (i, item) {
                //alert(data.rid[i]);	

                if (data.r_pix[i]) { var pixname = "https://restscene.com/ruploads/" + data.rid[i] + '/' + data.r_pix[i]; } else { var pixname = "https://web.restscene.com/assets/images/bg6.jpg"; }
                document.getElementById('list_details').innerHTML += "<div class=\"row mt-3 property-card\"><div style='position:absolute; z-index:10; font-size:20px;' class=\"col-sm-4 text-center\"  ><i class='fa fa-spinner fa-spin mt-5'></i></div><div class=\"col-sm-4 property-card-bg \" style=\"background-image: url('" + pixname + "'); z-index: 11;	\"></div><div class='col-sm-8 '><h5 class=\"mt-2 \"><i class='fa fa-hotel mr-2'></i>" + data.r_name[i] + "</h5><div class=''><i class='fa fa-usd mr-2 ml-1' ></i>" + data.r_price[i] + "/" + data.r_period[i] + "</div><div class=''><i class='fa fa-tags mr-2 ml-1 mt-2'></i>" + data.r_type[i] + "</div>  <div  class='col-sm-8 '>";
                if (data.v_status[i] === "Verified") {
                    document.getElementById('list_details').innerHTML += "<span class='v_status p-1 mt-2 alert alert-success' style='margin-top-25px;'><i class='fa fa-cog mr-2 ml-1'></i>" + data.v_status[i] + "</span>";
                } else {
                    document.getElementById('list_details').innerHTML += "<span class='v_status p-1 mt-2 alert alert-danger' style='margin-top-25px;'><i class='fa fa-cog mr-2 ml-1'></i>" + data.v_status[i] + "</span>";
                }
                document.getElementById('list_details').innerHTML += " </div> <button class=\"room-edit mt-2\" data-id=\"" + data.rid[i] + "\"  style='font-size:12px; width:150px; margin-top:4px;'>Edit Room <i class='fa fa-edit'></i></button>   <hr/></div></div>";

            });
            $("#list").removeAttr("disabled");

            //show room modal
            $("button.room-edit").on('click', function (e) {
                //callTheJsonp2(ename,tid);
                //$("button#cancelOrder").removeAttr("disabled");
                //$("button#pay").removeAttr("disabled");
                $("#modal-animation-1").modal({ backdrop: 'static', keyboard: false });
                document.getElementById('profileDetails').src = 'add-room.html?r=' + $(this).attr('data-id');
                document.getElementById('profileDetails').height = "480px";

                //event.target.id
                //$("img.sketch").show();	
                //$(".profileDetails").hide();
                //document.getElementById("sketch").src = "images_body/"+$(this).attr('data-id')+".png";	
                //document.getElementById("modal-title").innerHTML = $(this).attr('data-id').toUpperCase();
                document.getElementById("modal-title").innerHTML = "<i class='fa fa-hotel mr-2'></i><strong>EDIT ROOM</strong>";

            });



        },
        error: function (request, status, err) {
            if (status == "timeout") {
                $("#prop").removeAttr("disabled");
                document.getElementById("list_details").innerHTML = "<span class='alert alert-danger p-2'>Slow Network</span>"



            } else {
                document.getElementById("list_details").innerHTML = "<span class='alert alert-danger p-2'>Error connecting Server!</span>"


            }
        }

    });
}

///show rooms to clients
function showRooms2(e) {
    var pid = e.split(',')[0];

    document.getElementById("list_details").innerHTML = " <i class='fa fa-spinner fa-spin'></i>";
    $("#list").attr("disabled", "disabled");
    $.ajax({
        url: "https://api.restscene.com/rooms/", //the page containing php script
        type: "GET", //request type,
        dataType: 'jsonp',
        timeout: 50000,
        // data: {dist:a, lat:b, long:c},
        data: { pid: pid },
        success: function (data) {
            document.getElementById("list_details").innerHTML = "";
            $.each(data.rid, function (i, item) {
                //alert(data.rid[i]);	

                if (data.r_pix[i]) { var pixname = "https://restscene.com/ruploads/" + data.rid[i] + '/' + data.r_pix[i]; } else { var pixname = "https://web.restscene.com/assets/images/bg6.jpg"; }
                document.getElementById('list_details').innerHTML += "<div class=\"row mt-3 property-card\"><div style='position:absolute; z-index:10; font-size:20px;' class=\"col-sm-4 text-center\"  ><i class='fa fa-spinner fa-spin mt-5'></i></div><div class=\"col-sm-4 property-card-bg \" style=\"background-image: url('" + pixname + "'); z-index: 11; 	\"></div><div class='col-sm-8 ' style='text-transform: capitalize;'><h5 class=\"mt-2 \"><i class='fa fa-hotel mr-2'></i>" + data.r_name[i] + "</h5><div class=''><i class='fa fa-usd mr-2 ml-1' ></i>" + data.r_price[i] + "/" + data.r_period[i] + "</div><div class=''><i class='fa fa-tags mr-2 ml-1 mt-2'></i>" + data.r_type[i] + "</div>  <div  class='col-sm-8 '>";
                /*if(data.v_status[i] === "Verified"){ 
                document.getElementById('list_details').innerHTML  += "<span class='v_status p-1 mt-2 alert alert-success' style='margin-top-25px;'><i class='fa fa-cog mr-2 ml-1'></i>"+data.v_status[i]+"</span>"; }else{  
                document.getElementById('list_details').innerHTML  += "<span class='v_status p-1 mt-2 alert alert-danger' style='margin-top-25px;'><i class='fa fa-cog mr-2 ml-1'></i>"+data.v_status[i]+"</span>";
                       }*/
                document.getElementById('list_details').innerHTML += " </div> <button class=\"room-edit mt-2 btn btn-gradient-info\" data-id=\"" + data.rid[i] + "\"  style='font-size:12px; width:150px; margin-top:4px;'>Book Room <i class='fa fa-edit'></i></button>   <hr/></div></div>";

            });
            $("#list").removeAttr("disabled");

            //show room modal
            $("button.room-edit").on('click', function (e) {
                //callTheJsonp2(ename,tid);
                //$("button#cancelOrder").removeAttr("disabled");
                //$("button#pay").removeAttr("disabled");
                if (localStorage.email) {
                    $("#modal-animation-1").modal({ backdrop: 'static', keyboard: false });
                    document.getElementById('profileDetails').src = 'booking.html?r=' + $(this).attr('data-id');
                    document.getElementById('profileDetails').height = "480px";

                    //event.target.id
                    //$("img.sketch").show();	
                    //$(".profileDetails").hide();
                    //document.getElementById("sketch").src = "images_body/"+$(this).attr('data-id')+".png";	
                    //document.getElementById("modal-title").innerHTML = $(this).attr('data-id').toUpperCase();
                    document.getElementById("modal-title").innerHTML = "<i class='fa fa-hotel mr-2'></i><strong>BOOK ROOM</strong>";
                } else {

                    Lobibox.notify('default', {
                        size: 'mini',
                        position: 'center top',
                        msg: 'You have to Sign in to complete booking!'
                    });
                    localStorage.currentPage = "property.html";
                    var delay = 2000;
                    setTimeout(function () { location.href = "login.html"; }, delay);


                }

            });



        },
        error: function (request, status, err) {
            if (status == "timeout") {
                $("#prop").removeAttr("disabled");
                document.getElementById("list_details").innerHTML = "<span class='alert alert-danger p-2'>Slow Network</span>"



            } else {
                document.getElementById("list_details").innerHTML = "<span class='alert alert-danger p-2'>Error connecting Server!</span>"


            }
        }

    });
}

// register
function regMem() {
    //var ucat = document.getElementById('ucat').value;
    //var phone = document.getElementById('phone').value;
    var ushare = "";
    if (localStorage.ushare && localStorage.ushare !== "") {
        ushare = localStorage.ushare;
    }
    var email = document.getElementById('email').value;
    var pwd = document.getElementById('pwd').value;
    var state = document.getElementById('u_state').value;
    var lga = document.getElementById('u_city').value;
    var lname = $("#lname").val();
    var fname = $("#fname").val();
    var phone = localStorage.phone;
    var delay = 5000;
    $(".msg").html('<i class="fa fa-spinner fa-spin" style="font-size:24px"></i> ');
    $.ajax({
        url: host + "/api/signup",
        type: "GET",
        dataType: 'jsonp',
        timeout: 5000,
        data: { email: email, pwd: pwd, lname: lname, fname: fname, phone: phone, state: state, lga: lga, ushare: ushare },
        success: function (data) {
            if (data.symbol < 1) {
                $(".msg").html('<div class ="alert alert-danger p-2">' + data.msg + '</div>');
            } else {
                $(".msg").html('<div class ="alert alert-success p-2">' + data.msg + '</div>');
                var url2 = data.url;
                delay = 6000;
                setTimeout(function () { location.href = url2; }, delay);
            }
        },
        error: function (request, status, err) {
            if (status == "timeout") {
                $(".msg").html('<div class ="alert alert-danger p-2">Your connection is slow!</div>');
            } else {
                // another error occured 
                $(".msg").html('<div class ="alert alert-danger p-2">Error connecting Server!</div>');
            }
        }
    });
    setTimeout(function () { $(".msg").html(''); }, delay);
}



// Login Script
function login() {
    var email = document.getElementById('email').value;
    var pwd = document.getElementById('pwd').value;
    var delay = 10000;

    $(".result").html('<i class="fa fa-spinner fa-spin" style="font-size:24px"></i> ');
    $.ajax({
        url: host + "/api/login",
        type: "GET",
        dataType: 'jsonp',
        timeout: 10000,
        data: { email: email, pwd: pwd },
        success: function (data) {
            console.log(data.message);
            if (data.symbol < 1) {
                $(".result").html('<div class ="alert alert-danger p-2 text-wrap"><i class="fa fa-spinner fa-spin"></i> ' + data.message + '</div>');
            } else {
                if (localStorage) {
                    localStorage.email = data.user;
                    localStorage.ename = data.name;
                    localStorage.esess = data.sess;
                    localStorage.eimgs = data.eimg;
                    localStorage.subsn = data.subsn;
                    //localStorage.lang = data.lang;
                    //localStorage.level = data.level;

                }
                $(".result").html('<div class ="alert alert-success p-2 text-wrap"><i class="fa fa-spinner fa-spin"></i> ' + data.message + '</div>');
                var url = data.url;
                setTimeout(function () { location.href = url; }, delay);
            }

        },
        error: function (request, status, err) {
            if (status == "timeout") {
                $(".result").html('<div class ="alert alert-danger p-2"><i class="fa fa-spinner fa-spin"></i> Your connection is slow!</div>');
            } else {
                // another error occured 
                $(".result").html('<div class ="alert alert-danger p-2"><i class="fa fa-spinner fa-spin"></i> Error connecting Server!</div>');
            }
        }

    });

    setTimeout(function () { $(".result").html(''); }, delay);
}

// Recover password
function recoverPwd() {
    $(".result").html('<i class="fa fa-spinner fa-spin" style="font-size:24px"></i> ');
    var email = $("#email").val();
    var delay = 5000;
    $.ajax({
        url: host + "/api/recover",
        type: "GET",
        dataType: 'jsonp',
        data: { email: email },
        success: function (data) {
            console.log(data.msg);
            if (data.symbol < 1) {
                $(".result").html('<div class ="alert alert-danger p-2">' + data.msg + '</div>');
            } else {
                $(".result").html('<div class ="alert alert-success p-2">' + data.msg + '</div>');
            }
            var url2 = data.url;
            var delay = 5000;
            setTimeout(function () { location.href = url2; }, delay);
        },
        error: function (request, status, err) {
            if (status == "timeout") {
                $(".result").html('<div class ="alert alert-danger p-2">Your connection is slow!</div>');
            } else {
                // another error occured 
                $(".result").html('<div class ="alert alert-danger p-2">Error connecting Server!</div>');
            }
        }
    });
    setTimeout(function () { $(".result").html(''); }, delay);
}



function logout() {
    var delay = 2000;
    setTimeout(function () { /*location.href= "login.html";*/ window.top.location.href = "login.html"; }, delay);
    delete localStorage.email,
        localStorage.eid,
        localStorage.ename;
    localStorage.clear();
    Lobibox.notify('default', {
        size: 'mini',
        position: 'center top',
        msg: "Signing out!"
    });
}


///// Get booking details
function getBookingDetails(e) {
    $.ajax({
        url: "https://api.restscene.com/bookingDetails",
        type: "GET",
        dataType: 'jsonp',
        timeout: 50000,
        data: { bID: e },
        success: function (data) {
            var details = JSON.stringify(data.result);
            document.getElementById("b_value").innerHTML = "<h5 style='margin-bottom: -15px;'>" + data.result[0].p_name + "</h5><br/>     " + data.result[0].r_name + "";
            document.getElementById("r_price").innerHTML = " Price/" + data.result[0].r_period + ": " + data.result[0].r_price + "<hr/>";
            document.getElementById("b_details").innerHTML = "Room Type: " + data.result[0].r_type + "<br/>Check In: " + data.result[0].checkin + " | Check Out:" + data.result[0].checkout + "<br/> Amount ($): " + data.result[0].amt + "<br/>Name: " + data.result[0].p_fname + "<br/>Phone: " + data.result[0].phone + "<br/>Email: " + data.result[0].email + "<hr/>City: " + data.result[0].city + "<br/>Payment Status: " + data.result[0].status;
        }
    });


}
/*
*/



// bid details
function biddetails(l) {
    //$("#bookingHistory").html('<i class="fa fa-spinner fa-spin"></i>');
    $.ajax({
        url: "https://redan.quantumcloud.ng/api/biddetails",
        type: "GET",
        dataType: 'jsonp',
        timeout: 50000,
        data: { email: localStorage.email, lid: l },
        success: function (data) {
            console.log(data.result);
            var table = $('#default-datatable').DataTable({
                data: data.result,
                columns: [
                    { data: 'bid', title: 'ID', },
                    {
                        data: 'bidstate',
                        "sClass": "left",
                        "mRender": function (data, type, full) {
                            var count = full.tto_city;
                            return "<div class='bid-details' style='white-space:normal; max-width:300px; float: left; position:relative;'><i class='fa fa-truck mr-1'></i>" + full.tcode + " &raquo; " + full.ttruck + "<br/><i class='fa fa-map-marker mr-1 ml-1'></i>" + full.tfrom + ", " + full.tfrom_city + " &#8594; " + full.tto + ", " + full.tto_city + "<br/><span class='ml-3'>Weight: " + full.tweight + "lbs - Length: " + full.tlength + "ft<span><br/><span class=''><i class='fa fa-phone mr-1'></i>" + full.phone + " &raquo; " + full.coy + "</span><br/> <button class='mt-1 btn btn-secondary'><i class='fa fa-gavel'></i> Accept Bid</button> <a class='mt-1 btn btn-inverse-secondary' href='tel:" + full.phone + "'><i class='fa fa-phone'></i> Call </a></div>";

                        },
                        title: "TRUCKERS &#9776; T<span style='text-transform: lowercase !important;'>otal:</span> " + data.result.length
                    },

                ],
                "scrollX": false,
                "paging": false,
                "ordering": false,
                "responsive": true,
                "aaSorting": [[0, "desc"]],
                "pagingType": "full_numbers"
            });


            table.column(0).visible(false);
            //table.column( 0 ).data().join('<button>Click!</button>');

            $('#default-datatable tbody').on('click', 'button', function () {
                //var d = table.row(this).data();
                var c = table.row($(this).parents('tr')).data();
                //alert( 'You clicked on '+c.tid+'\'s row' );
                if (localStorage.email) {
                    //alert( 'You clicked on '+c.bID+'\'s row' ); 
                    Lobibox.window({
                        title: '<i class="fa fa-hotel ml-3 mb-3"></i> INVOICE ',
                        /*url: 'booking.html',*/
                        content: "<iframe id=\"profileDetails\" class=\"profileDetails\" src='invoicedetails.html?b=" + c.bID + "' height=\"480px\"  scrolling=\"no\" frameborder=\"0\" style=\"background:url('assets/images/ajax-loader.gif') center center no-repeat; width:100%;\"></iframe>",
                        modal: true,
                        showClass: 'flipInX',
                        height: 480

                    });


                }
            });

            resizeFrame();

        },
        error: function (request, status, err) {
            if (status == "timeout") {
                //$("."+a).removeAttr("disabled");	
                Lobibox.notify('default', {
                    size: 'mini',
                    position: 'center top',
                    msg: 'Your connection is slow!'
                });

            } else {

                Lobibox.notify('default', {
                    size: 'mini',
                    position: 'center top',
                    msg: 'Error connecting Server!'
                    //msg:'Error: ' + request + status + err 
                });


            }
        }
    });
}
/*
*/

/////// show cities
function showcities(a, c) {


    var state = document.getElementById(a).value;
    $("." + a).attr("disabled", "disabled");
    //var label =  document.getElementById(c+'_p').innerHTML;		
    //document.getElementById(c+'_p').innerHTML = "<i class='fa fa-spinner fa-spin'></i>";

    $.ajax({
        url: host + "/api/cities/", //the page containing php script
        type: "GET", //request type,
        dataType: 'jsonp',
        timeout: 50000,
        data: { state: state },
        success: function (data) {
            /*Lobibox.notify('default', {
                    size: 'mini',
                    position: 'center top',
                    msg: data.msg
                      });*/
            $("." + a).removeAttr("disabled");
            //document.getElementById(c+'_p').innerHTML = label;			
            if (data.status == 1) {

                document.getElementById(c).innerHTML = data.response.replace(/\\/g, '');


            } else {

                document.getElementById(c).innerHTML = data.response.replace(/\\/g, '');
            }

        },
        error: function (request, status, err) {
            if (status == "timeout") {
                $("." + a).removeAttr("disabled");
                //document.getElementById(c+'_p').innerHTML = label;	
                Lobibox.notify('default', {
                    size: 'mini',
                    position: 'center top',
                    msg: 'Your connection is slow!'
                });

            } else {
                $("." + a).removeAttr("disabled");
                //document.getElementById(c+'_p').innerHTML = label;	
                Lobibox.notify('default', {
                    size: 'mini',
                    position: 'center top',
                    msg: 'Error connecting Server!'
                    //msg:'Error: ' + request + status + err 
                });


            }
        }

    });



}
/*
settings: PwdModal
*/
function settingsPwdModal() {

    Lobibox.window({
        title: '    <span style="margin-left:10px;">CHANGE PASSWORD</span>',
        content: "<iframe id='ifm' class='ifm' src='settingsPwd.html'  scrolling='no' frameborder='0' style=\"background:url('assets/images/ajax-loader.gif') center center no-repeat; width:100%;\"></iframe>",
        modal: true,
        closeButton: true,
        draggable: false,
        showClass: 'fadeInRight',
        hideClass: 'fadeOutRight',
        beforeClose: function () { },
        height: $(document).height(),
        width: $(document).width()

    });



}
/*
*/
///////////////////////////
/*
settings: settingsModal
*/
function settingsTosModal() {
    //alert( 'You clicked on '+c.bID+'\'s row' );


    Lobibox.window({
        title: '    <span style="margin-left:10px;">TERMS OF SERVICE</span>',
        /*url: 'booking.html',*/
        content: "<iframe id='ifm' class='ifm' src='settingsTos.html' scrolling='no' frameborder='0' style=\"background:url('assets/images/ajax-loader.gif') center center no-repeat; width:100%;\"></iframe>",
        modal: true,
        closeButton: true,
        draggable: false,
        showClass: 'fadeInRight',
        hideClass: 'fadeOutRight',
        beforeClose: function () { },
        height: $(document).height(),
        width: $(document).width()


    });



}
/*
*/
///////////////////////////
/*
settings: settingsModal
*/
function settingsPryModal() {
    //alert( 'You clicked on '+c.bID+'\'s row' );


    Lobibox.window({
        title: '    <span style="margin-left:10px;">PRIVACY POLICY</span>',
        /*url: 'booking.html',*/
        content: "<iframe id='ifm' class='ifm' src='settingsPry.html' scrolling='no' frameborder='0' style=\"background:url('assets/images/ajax-loader.gif') center center no-repeat; width:100%;\"></iframe>",
        modal: true,
        closeButton: true,
        draggable: false,
        showClass: 'fadeInRight',
        hideClass: 'fadeOutRight',
        beforeClose: function () { },
        height: $(document).height(),
        width: $(document).width()

    });



}
/*
*/
///////////////////////////
/*
settings: settingsModal
*/
function settingsCoyModal(c) {
    //alert( 'You clicked on '+c.bID+'\'s row' );
    var src = "settingsCoy.html";
    if (c == "BOARD OF DIRECTORS") { src = "settingsBod.html"; }
    if (c == "REPRESENTATIVES") { src = "settingsRep.html"; }
    if (c == "PROFESSIONALS") { src = "settingsPro.html"; }
    if (c == "FINANCIALS") { src = "settingsFin.html"; }
    if (c == "PROJECTS") { src = "settingsPrj.html"; }
    if (c == "EXPERIENCE") { src = "settingsExp.html"; }
    if (c == "DOCUMENTS") { src = "settingsDoc.html"; }
    if (c == "UPDATES") { src = "settingsMem.html"; }

    Lobibox.window({
        title: '    <span style="margin-left:10px;">' + c + '</span>',
        /*url: 'booking.html',*/
        content: "<iframe id='ifm' class='ifm' src='" + src + "' scrolling='no' frameborder='0' style=\"background:url('assets/images/ajax-loader.gif') center center no-repeat; width:100%;\"></iframe>",
        modal: true,
        closeButton: true,
        draggable: false,
        showClass: 'fadeInRight',
        hideClass: 'fadeOutRight',
        beforeClose: function () { },
        height: $(document).height(),
        width: $(document).width()

    });



}
/*
*/
/*
settings: LcsModal
*/
function settingsLcsModal() {
    //alert( 'You clicked on '+c.bID+'\'s row' );

    Lobibox.window({
        title: '    <span style="margin-left:10px;">UPDATE LICENSES</span>',
        /*url: 'booking.html',*/
        content: "<iframe id='ifm' class='ifm' src='settingsLcs.html'  scrolling='no' frameborder='0' style=\"background:url('assets/images/ajax-loader.gif') center center no-repeat; width:100%;\"></iframe>",
        modal: true,
        closeButton: true,
        draggable: false,
        showClass: 'fadeInRight',
        hideClass: 'fadeOutRight',
        beforeClose: function () { },
        height: $(document).height(),
        width: $(document).width()

    });


    //location.href = 'index.html?u='+c.bID;		  
    //$("#modal-2").modal({backdrop: 'static', keyboard: false});  
    //$('#modal-2').modal("show");

}
/*

*/
/*
Post Load Modal
*/
function addNewPlan() {
    //alert( 'You clicked on '+c.bID+'\'s row' );
    $(".lobibox-header").attr('style', 'height: 50px !important');
    var l = 1;
    Lobibox.window({
        title: '    <span style="margin-left:10px;"> ADD MEMO</span>',
        /*url: 'booking.html',*/
        content: "<iframe id=\"ifm\" class=\"ifm\" src='addplan.html?l=" + l + "'  scrolling='no' frameborder='0' style=\"background:url('assets/images/ajax-loader.gif') center center no-repeat; width:100%;\"></iframe>",
        modal: true,
        closeButton: true,
        draggable: false,
        showClass: 'fadeInRight',
        hideClass: 'fadeOutRight',
        height: $(document).height(),
        width: $(document).width(),
        beforeClose: function () {
            //location.reload();
            var table = $('#default-datatable').DataTable();
            table.clear().draw();
            ////////
            $.ajax({
                url: host + "/api/subsns/",
                type: "GET",
                dataType: 'jsonp',
                timeout: 50000,
                data: { email: localStorage.email },
                success: function (data) {
                    console.log(data.result);
                    table.rows.add(data.result).draw(false);

                }
            });

            ////////
        },
        height: $(document).height(),
        width: $(document).width()

    });


    //location.href = 'index.html?u='+c.bID;		  
    //$("#modal-2").modal({backdrop: 'static', keyboard: false});  
    //$('#modal-2').modal("show");

}
/*

*/
/*
Post Truck Modal
*/
function postTruckModal(l) {
    //alert( 'You clicked on '+c.bID+'\'s row' );

    Lobibox.window({
        title: '    <span style="margin-left:10px;">POST TRUCK</span>',
        /*url: 'booking.html',*/
        content: "<iframe id='ifm' class='ifm'  src='post-truck.html?l=" + l + "'  scrolling='no' frameborder='0' style=\"background:url('assets/images/ajax-loader.gif') center center no-repeat; width:100%;\"></iframe>",
        modal: true,
        closeButton: true,
        draggable: false,
        showClass: 'fadeInRight',
        hideClass: 'fadeOutRight',
        beforeClose: function () {
            //location.reload();
            var table = $('#second-datatable').DataTable();
            table.clear().draw();
            ////////
            $.ajax({
                url: "https://redan.quantumcloud.ng/api/loadboardTrucks/",
                type: "GET",
                dataType: 'jsonp',
                timeout: 50000,
                data: { email: localStorage.email },
                success: function (data) {
                    console.log(data.result);
                    table.rows.add(data.result).draw(false);

                }
            });

            ////////
        },
        height: $(document).height(),
        width: $(document).width()

    });


    //location.href = 'index.html?u='+c.bID;		  
    //$("#modal-2").modal({backdrop: 'static', keyboard: false});  
    //$('#modal-2').modal("show");

}
/*

*/
/*
Post Mover Modal
*/
function postMoverModal(l) {
    //alert( 'You clicked on '+c.bID+'\'s row' );

    Lobibox.window({
        title: '    <span style="margin-left:10px;">POST MOVER</span>',
        /*url: 'booking.html',*/
        content: "<iframe id='ifm' class='ifm'  src='post-mover.html?l=" + l + "'  scrolling='no' frameborder='0' style=\"background:url('assets/images/ajax-loader.gif') center center no-repeat; width:100%;\"></iframe>",
        modal: true,
        closeButton: true,
        draggable: false,
        showClass: 'fadeInRight',
        hideClass: 'fadeOutRight',
        beforeClose: function () {
            //location.reload();
            var table = $('#third-datatable').DataTable();
            table.clear().draw();
            ////////
            $.ajax({
                url: "https://redan.quantumcloud.ng/api/loadboardMovers/",
                type: "GET",
                dataType: 'jsonp',
                timeout: 50000,
                data: { email: localStorage.email },
                success: function (data) {
                    console.log(data.result);
                    table.rows.add(data.result).draw(false);

                }
            });

            ////////
        },
        height: $(document).height(),
        width: $(document).width()

    });


    //location.href = 'index.html?u='+c.bID;		  
    //$("#modal-2").modal({backdrop: 'static', keyboard: false});  
    //$('#modal-2').modal("show");

}
/*

*/
/*
Edit Load
*/
function editLoadModal(l) {
    //alert( 'You clicked on '+c.bID+'\'s row' );

    Lobibox.window({
        title: '    <span style="margin-left:10px;">EDIT LOAD</span>',
        /*url: 'booking.html',*/
        content: "<iframe id=\"profileDetails\" class=\"profileDetails\" src='edit-load.html?l=" + l + "' height=\"1135px\"  scrolling=\"no\" frameborder=\"0\" style=\"background:url('assets/images/ajax-loader.gif') center center no-repeat; width:100%;\"></iframe>",
        modal: true,
        closeButton: true,
        draggable: false,
        showClass: 'fadeInRight',
        hideClass: 'fadeOutRight',
        beforeClose: function () {
            //location.reload();
            var table = $('#default-datatable').DataTable();
            table.clear().draw();
            ////////
            $.ajax({
                url: "https://redan.quantumcloud.ng/api/loadboardLoads/",
                type: "GET",
                dataType: 'jsonp',
                timeout: 50000,
                data: { email: localStorage.email },
                success: function (data) {
                    console.log(data.result);
                    table.rows.add(data.result).draw(false);

                }
            });

            ////////
        },
        height: $(document).height(),
        width: $(document).width()

    });


    //location.href = 'index.html?u='+c.bID;		  
    //$("#modal-2").modal({backdrop: 'static', keyboard: false});  
    //$('#modal-2').modal("show");

}
/*

*/
/*
Edit Truck
*/
function editTruckModal(t) {
    //alert( 'You clicked on '+c.bID+'\'s row' );

    Lobibox.window({
        title: '    <span style="margin-left:10px;">EDIT TRUCK</span>',
        /*url: 'booking.html',*/
        content: "<iframe id='ifm' class='ifm' src='edit-truck.html?t=" + t + "'   scrolling='no' frameborder='0' style=\"background:url('assets/images/ajax-loader.gif') center center no-repeat; width:100%;\"></iframe>",
        modal: true,
        closeButton: true,
        draggable: false,
        showClass: 'fadeInRight',
        hideClass: 'fadeOutRight',
        beforeClose: function () {
            //location.reload();
            var table = $('#second-datatable').DataTable();
            table.clear().draw();
            ////////
            $.ajax({
                url: "https://redan.quantumcloud.ng/api/loadboardTrucks/",
                type: "GET",
                dataType: 'jsonp',
                timeout: 50000,
                data: { email: localStorage.email },
                success: function (data) {
                    console.log(data.result);
                    table.rows.add(data.result).draw(false);

                }
            });

            ////////
        },
        height: $(document).height(),
        width: $(document).width()

    });


    //location.href = 'index.html?u='+c.bID;		  
    //$("#modal-2").modal({backdrop: 'static', keyboard: false});  
    //$('#modal-2').modal("show");

}
/*

*/
/*
Edit Mover
*/
function editMoverModal(m) {
    //alert( 'You clicked on '+c.bID+'\'s row' );

    Lobibox.window({
        title: '    <span style="margin-left:10px;">EDIT MOVER</span>',
        /*url: 'booking.html',*/
        content: "<iframe id='ifm' class='ifm' src='edit-mover.html?m=" + m + "'   scrolling='no' frameborder='0' style=\"background:url('assets/images/ajax-loader.gif') center center no-repeat; width:100%;\"></iframe>",
        modal: true,
        closeButton: true,
        draggable: false,
        showClass: 'fadeInRight',
        hideClass: 'fadeOutRight',
        beforeClose: function () {
            //location.reload();
            var table = $('#third-datatable').DataTable();
            table.clear().draw();
            ////////
            $.ajax({
                url: "https://redan.quantumcloud.ng/api/loadboardMovers/",
                type: "GET",
                dataType: 'jsonp',
                timeout: 50000,
                data: { email: localStorage.email },
                success: function (data) {
                    console.log(data.result);
                    table.rows.add(data.result).draw(false);

                }
            });

            ////////
        },
        height: $(document).height(),
        width: $(document).width()

    });


    //location.href = 'index.html?u='+c.bID;		  
    //$("#modal-2").modal({backdrop: 'static', keyboard: false});  
    //$('#modal-2').modal("show");

}
/*

*/

//////load competitors
function loadcompt(pid) {

    //$("#bookingHistory").html('<i class="fa fa-spinner fa-spin"></i>');
    $.ajax({
        url: host + "/api/loadcompt/",
        type: "GET",
        dataType: 'jsonp',
        timeout: 50000,
        data: { email: localStorage.email, pid: pid },
        success: function (data) {
            //console.log(data.result);	
            // alert(data.cid);
            //document.getElementById("cid").value = data.cid;	   
            var table = $('#default-datatable').DataTable({
                data: data.result,
                select: true,
                dom: 'lrt',
                responsive: true,
                bLengthChange: false,
                pageLength: 50,
                scrollX: true,
                columns: [
                    { data: 'comid', title: 'ID', },
                    {
                        data: 'c_name',
                        "sClass": "left share-width",
                        "mRender": function (data, type, full) {

                            return "NAME: " + full.c_name + "<br/>PRODUCT/SERVICE: " + full.c_prod + "<br/>PRICE: &#x20A6;" + full.c_price + "<br/>REGION: " + full.c_region + "<br/>AREA: " + full.c_loc;

                        },
                        title: "COMPETITOR"
                    },

                    {
                        data: 'y_prod',
                        "sClass": "left share-width",
                        "mRender": function (data, type, full) {

                            return "PRODUCT/SERVICE: " + full.y_prod + "<br/>PRICE: &#x20A6;" + full.y_price;

                        },
                        title: "OUR PRODUCTS/SERVICES"
                    },

                    { data: null }
                ],
                "columnDefs": [{ "targets": -1, "data": null, "defaultContent": "<button class='btn btn-primary cursor-pointer update-btn' style='width:90px;'>UPDATE</button> <button class='btn fa fa-trash cursor-pointer delete-btn' style='width:60px !important;'> </button>" }],
                "scrollX": true,
                "paging": true,
                "ordering": true,
                "responsive": true,
                "aaSorting": [[0, "desc"]],
                "pagingType": "full_numbers"
            });




            resizeFrame();
            table.column(0).visible(false);
            //table.column( 0 ).data().join('<button>Click!</button>');


            $('#default-datatable tbody').on('click', 'button.update-btn', function () {
                //var d = table.row(this).data();
                var c = table.row($(this).parents('tr')).data();
                //alert( 'You clicked on '+c.staffid+'\'s row' );
                //location.href = src+"?s="+c.staffid		  

                $("#modal-animation-1").modal({ backdrop: 'static', keyboard: false });
                document.getElementById('profileDetails').src = 'editcompetitor.html?c=' + c.comid + "&t=" + Math.floor(Math.random() * 9000000) + 1000000;
                document.getElementById('profileDetails').height = "700px";
                document.getElementById("modal-title").innerHTML = "<i class='fa fa-user mr-2'></i><strong>EDIT COMPETITOR</strong>";


            });

            $('#default-datatable tbody').on('click', 'button.delete-btn', function () {

                //var d = table.row(this).data();
                var c = table.row($(this).parents('tr')).data();
                var sid = c.comid;
                var sname = c.c_name;


                var lobibox = Lobibox.notify('info', {
                    size: 'mini',
                    title: '<i class="fa fa-trash"></i> Confirm Delete',
                    position: 'left top',
                    closeOnClick: false,
                    delay: false,
                    icon: false,
                    messageHeight: 300,
                    msg: "Click to confirm delete! &nbsp;&nbsp;<br/><h6 style='color:#fff; margin-top: 20px;'> COMPETITOR: " + sname + "</h6><br/><button class='btn btn-danger pl-4 p-3 pr-4 mt-n2' style='font-size:12px; width:100%;' onClick=\"javascript:deleteCompetitor('" + sid + "','" + pid + "');\">DELETE <i class='fa fa-trash'></i></button>"
                });
                resizeFrame();
                //$(window).scrollTop({top: 0, behavior: 'smooth'});	


                //$(".lobibox-window").animate({scrollTop:0}, "smooth");
                //window.scrollTo({ top: 0, behavior: 'smooth' });	
                //$('div.lobibox.lobibox-window').scrollTop({top: 0, behavior: 'smooth'});	


            });



        }
    });
}

/*

*/
////// delete owner
function deleteCompetitor(s, p) {

    $.ajax({
        url: host + "/api/deleteCompetitor",
        type: "GET",
        dataType: 'jsonp',
        timeout: 5000,
        data: { email: localStorage.email, cid: s },
        success: function (data) {

            $('.lobibox-close').click();
            //getForm(b);
            ///getFields(fn);   /clear instead and redraw
            var table = $('#default-datatable').DataTable();
            table.clear().draw();

            ////////
            $.ajax({
                url: host + "/api/loadcompt/",
                type: "GET",
                dataType: 'jsonp',
                timeout: 5000,
                data: { email: localStorage.email, pid: p },
                success: function (data) {
                    console.log(data.result);
                    table.rows.add(data.result).draw(false);

                }
            });

            //////// 

            Lobibox.notify('default', {
                size: 'mini',
                position: 'center top',
                msg: data.msg
            });


        },
        error: function (request, status, err) {
            if (status == "timeout") {

                Lobibox.notify('default', {
                    size: 'mini',
                    position: 'center top',
                    msg: 'Slow Network!'
                });

            } else {

                Lobibox.notify('default', {
                    size: 'mini',
                    position: 'center top',
                    msg: 'Error connecting Server!'
                });
            }
        }
    });
}

/*

*/
//////load tangible asset
function loadasi(pid) {

    //$("#bookingHistory").html('<i class="fa fa-spinner fa-spin"></i>');
    $.ajax({
        url: host + "/api/loadasi/",
        type: "GET",
        dataType: 'jsonp',
        timeout: 50000,
        data: { email: localStorage.email, pid: pid },
        success: function (data) {
            //console.log(data.result);	
            // alert(data.cid);
            //document.getElementById("cid").value = data.cid;	   
            var table = $('#third-datatable').DataTable({
                data: data.result,
                select: true,
                dom: 'lrt',
                responsive: true,
                bLengthChange: false,
                pageLength: 50,
                scrollX: true,
                columns: [
                    { data: 'asid', title: 'ID', },
                    { data: 'astype', title: 'ASSET TYPE', },
                    { data: 'asdesn', title: 'DESCRIPTION', },
                    {
                        data: 'asvalue',
                        "sClass": "right",
                        "mRender": function (data, type, full) {

                            return "<span style='float:right; margin-right: 20px;'>&#8358;" + (full.asvalue).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') + "</span>";

                        },
                        title: "VALUE"
                    },
                    { data: null }
                ],
                "columnDefs": [{ "targets": -1, "data": null, "defaultContent": "<button class='btn btn-primary cursor-pointer update-btn' style='width:90px;'>UPDATE</button> <button class='btn fa fa-trash cursor-pointer delete-btn' style='width:60px !important;'> </button>" }],
                "scrollX": true,
                "paging": true,
                "ordering": true,
                "responsive": true,
                "aaSorting": [[0, "desc"]],
                "pagingType": "full_numbers"
            });




            resizeFrame();
            table.column(0).visible(false);
            //table.column( 0 ).data().join('<button>Click!</button>');


            $('#third-datatable tbody').on('click', 'button.update-btn', function () {
                //var d = table.row(this).data();
                localStorage.modal = "assetsigb";
                var c = table.row($(this).parents('tr')).data();
                //alert( 'You clicked on '+c.staffid+'\'s row' );
                //location.href = src+"?s="+c.staffid		  

                $("#modal-animation-1").modal({ backdrop: 'static', keyboard: false });
                document.getElementById('profileDetails').src = 'editassetsibg.html?a=' + c.asid + "&t=" + Math.floor(Math.random() * 9000000) + 1000000;
                document.getElementById('profileDetails').height = "320px";
                document.getElementById("modal-title").innerHTML = "<i class='fa fa-database mr-2'></i><strong>EDIT ASSET <span style='font-style:italic;'>Intangible</span></strong>";
                resizeFrame();

            });

            $('#third-datatable tbody').on('click', 'button.delete-btn', function () {

                //var d = table.row(this).data();
                var c = table.row($(this).parents('tr')).data();
                var sid = c.asid;
                var sname = c.astype


                var lobibox = Lobibox.notify('info', {
                    size: 'mini',
                    title: '<i class="fa fa-trash"></i> Confirm Delete',
                    position: 'left top',
                    closeOnClick: false,
                    delay: false,
                    icon: false,
                    messageHeight: 300,
                    msg: "Click to confirm delete! &nbsp;&nbsp;<br/><h6 style='color:#fff; margin-top: 20px;'> ASSET: " + sname + "</h6><br/><button class='btn btn-danger pl-4 p-3 pr-4 mt-n2' style='font-size:12px; width:100%;' onClick=\"javascript:deleteAssetsIgb('" + sid + "','" + pid + "');\">DELETE <i class='fa fa-trash'></i></button>"
                });
                resizeFrame();
                //$(window).scrollTop({top: 0, behavior: 'smooth'});	


                //$(".lobibox-window").animate({scrollTop:0}, "smooth");
                //window.scrollTo({ top: 0, behavior: 'smooth' });	
                //$('div.lobibox.lobibox-window').scrollTop({top: 0, behavior: 'smooth'});	


            });



        }
    });
}
/*

*/
////// delete tangible asset
function deleteAssetsIgb(s, p) {

    $.ajax({
        url: host + "/api/deleteAssetsIgb",
        type: "GET",
        dataType: 'jsonp',
        timeout: 5000,
        data: { email: localStorage.email, asid: s },
        success: function (data) {

            $('.lobibox-close').click();
            //getForm(b);
            ///getFields(fn);   /clear instead and redraw
            var table = $('#third-datatable').DataTable();
            table.clear().draw();

            ////////
            $.ajax({
                url: host + "/api/loadasi/",
                type: "GET",
                dataType: 'jsonp',
                timeout: 5000,
                data: { email: localStorage.email, pid: p },
                success: function (data) {
                    console.log(data.result);
                    table.rows.add(data.result).draw(false);

                }
            });

            //////// 

            Lobibox.notify('default', {
                size: 'mini',
                position: 'center top',
                msg: data.msg
            });


        },
        error: function (request, status, err) {
            if (status == "timeout") {

                Lobibox.notify('default', {
                    size: 'mini',
                    position: 'center top',
                    msg: 'Slow Network!'
                });

            } else {

                Lobibox.notify('default', {
                    size: 'mini',
                    position: 'center top',
                    msg: 'Error connecting Server!'
                });
            }
        }
    });
}
/*

*/

/*

*/
//////load tangible asset
function loadast(pid) {

    //$("#bookingHistory").html('<i class="fa fa-spinner fa-spin"></i>');
    $.ajax({
        url: host + "/api/loadast/",
        type: "GET",
        dataType: 'jsonp',
        timeout: 50000,
        data: { email: localStorage.email, pid: pid },
        success: function (data) {
            //console.log(data.result);	
            // alert(data.cid);
            //document.getElementById("cid").value = data.cid;	   
            var table = $('#second-datatable').DataTable({
                data: data.result,
                select: true,
                dom: 'lrt',
                responsive: true,
                bLengthChange: false,
                pageLength: 50,
                scrollX: true,
                columns: [
                    { data: 'asid', title: 'ID', },
                    { data: 'astype', title: 'ASSET TYPE', },
                    { data: 'asdesn', title: 'DESCRIPTION', },
                    {
                        data: 'asprice',
                        "sClass": "right",
                        "mRender": function (data, type, full) {

                            return "<span style='float:right; margin-right: 20px;'>&#8358;"
                                + (full.asprice).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') + "</span>";

                        },
                        title: "PURCHASE PRICE"
                    },
                    {
                        data: 'asyear',
                        "sClass": "left share-width",
                        "mRender": function (data, type, full) {

                            return "YEAR OF ACQUISITION: " + full.asyear +
                                "<br/>LIFE SPAN: " + full.asspan + "years";

                        },
                        title: "ASSET LIFE"
                    },

                    { data: null }
                ],
                "columnDefs": [{ "targets": -1, "data": null, "defaultContent": "<button class='btn btn-primary cursor-pointer update-btn' style='width:90px;'>UPDATE</button> <button class='btn fa fa-trash cursor-pointer delete-btn' style='width:60px !important;'> </button>" }],
                "scrollX": true,
                "paging": true,
                "ordering": true,
                "responsive": true,
                "aaSorting": [[0, "desc"]],
                "pagingType": "full_numbers"
            });




            resizeFrame();
            table.column(0).visible(false);
            //table.column( 0 ).data().join('<button>Click!</button>');


            $('#second-datatable tbody').on('click', 'button.update-btn', function () {
                //var d = table.row(this).data();
                localStorage.modal = "assetstgb";
                var c = table.row($(this).parents('tr')).data();
                //alert( 'You clicked on '+c.staffid+'\'s row' );
                //location.href = src+"?s="+c.staffid		  

                $("#modal-animation-1").modal({ backdrop: 'static', keyboard: false });
                document.getElementById('profileDetails').src = 'editassetstbg.html?a=' + c.asid + "&t=" + Math.floor(Math.random() * 9000000) + 1000000;
                document.getElementById('profileDetails').height = "450px";
                document.getElementById("modal-title").innerHTML = "<i class='fa fa-database mr-2'></i><strong>EDIT ASSET</strong>";
                resizeFrame();

            });

            $('#second-datatable tbody').on('click', 'button.delete-btn', function () {

                //var d = table.row(this).data();
                var c = table.row($(this).parents('tr')).data();
                var sid = c.asid;
                var sname = c.astype


                var lobibox = Lobibox.notify('info', {
                    size: 'mini',
                    title: '<i class="fa fa-trash"></i> Confirm Delete',
                    position: 'left top',
                    closeOnClick: false,
                    delay: false,
                    icon: false,
                    messageHeight: 300,
                    msg: "Click to confirm delete! &nbsp;&nbsp;<br/><h6 style='color:#fff; margin-top: 20px;'> ASSET: " + sname + "</h6><br/><button class='btn btn-danger pl-4 p-3 pr-4 mt-n2' style='font-size:12px; width:100%;' onClick=\"javascript:deleteAssetsTgb('" + sid + "','" + pid + "');\">DELETE <i class='fa fa-trash'></i></button>"
                });
                resizeFrame();
                //$(window).scrollTop({top: 0, behavior: 'smooth'});	


                //$(".lobibox-window").animate({scrollTop:0}, "smooth");
                //window.scrollTo({ top: 0, behavior: 'smooth' });	
                //$('div.lobibox.lobibox-window').scrollTop({top: 0, behavior: 'smooth'});	


            });



        }
    });
}
/*

*/
////// delete tangible asset
function deleteAssetsTgb(s, p) {

    $.ajax({
        url: host + "/api/deleteAssetsTgb",
        type: "GET",
        dataType: 'jsonp',
        timeout: 5000,
        data: { email: localStorage.email, asid: s },
        success: function (data) {

            $('.lobibox-close').click();
            //getForm(b);
            ///getFields(fn);   /clear instead and redraw
            var table = $('#second-datatable').DataTable();
            table.clear().draw();

            ////////
            $.ajax({
                url: host + "/api/loadast/",
                type: "GET",
                dataType: 'jsonp',
                timeout: 5000,
                data: { email: localStorage.email, pid: p },
                success: function (data) {
                    console.log(data.result);
                    table.rows.add(data.result).draw(false);

                }
            });

            //////// 

            Lobibox.notify('default', {
                size: 'mini',
                position: 'center top',
                msg: data.msg
            });


        },
        error: function (request, status, err) {
            if (status == "timeout") {

                Lobibox.notify('default', {
                    size: 'mini',
                    position: 'center top',
                    msg: 'Slow Network!'
                });

            } else {

                Lobibox.notify('default', {
                    size: 'mini',
                    position: 'center top',
                    msg: 'Error connecting Server!'
                });
            }
        }
    });
}
/*

*/

//////load allocations
function loadallo(pid) {

    //$("#bookingHistory").html('<i class="fa fa-spinner fa-spin"></i>');
    $.ajax({
        url: host + "/api/loadallo/",
        type: "GET",
        dataType: 'jsonp',
        timeout: 50000,
        data: { email: localStorage.email, pid: pid },
        success: function (data) {
            //console.log(data.result);	
            // alert(data.cid);
            //document.getElementById("cid").value = data.cid;	   
            var table = $('#default-datatable').DataTable({
                data: data.result,
                select: true,
                dom: 'lrt',
                responsive: true,
                bLengthChange: false,
                pageLength: 50,
                scrollX: true,
                columns: [
                    { data: 'alid', title: 'ID', },
                    { data: 'altype', title: 'ALLOCATION', },
                    {
                        data: 'aldesn',
                        "sClass": "right",
                        "mRender": function (data, type, full) {

                            return "<span style='margin-left: 0px;'><strong>Description:</strong> " + full.aldesn + "<br/><strong>Allocation: </span></strong> " + full.alvalue + "%";

                        },
                        title: "DETAILS"
                    },

                    { data: null }
                ],
                "columnDefs": [{ "targets": -1, "data": null, "defaultContent": "<button class='btn btn-primary cursor-pointer update-btn' style='width:90px;'>UPDATE</button> <button class='btn fa fa-trash cursor-pointer delete-btn' style='width:60px !important;'> </button>" }],
                "scrollX": true,
                "paging": true,
                "ordering": true,
                "responsive": true,
                "aaSorting": [[0, "desc"]],
                "pagingType": "full_numbers"
            });




            resizeFrame();
            table.column(0).visible(false);
            //table.column( 0 ).data().join('<button>Click!</button>');


            $('#default-datatable tbody').on('click', 'button.update-btn', function () {
                //var d = table.row(this).data();
                localStorage.modal = "allocation";
                var c = table.row($(this).parents('tr')).data();
                //alert( 'You clicked on '+c.staffid+'\'s row' );
                //location.href = src+"?s="+c.staffid		  

                $("#modal-animation-1").modal({ backdrop: 'static', keyboard: false });
                document.getElementById('profileDetails').src = 'editallocation.html?o=' + c.alid + "&t=" + Math.floor(Math.random() * 9000000) + 1000000;
                document.getElementById('profileDetails').height = "350px";
                document.getElementById("modal-title").innerHTML = "<i class='fa fa-pie-chart mr-2'></i><strong>EDIT ALLOCATION</strong>";
                resizeFrame();

            });

            $('#default-datatable tbody').on('click', 'button.delete-btn', function () {

                //var d = table.row(this).data();
                var c = table.row($(this).parents('tr')).data();
                var sid = c.alid;
                var sname = c.altype


                var lobibox = Lobibox.notify('info', {
                    size: 'mini',
                    title: '<i class="fa fa-trash"></i> Confirm Delete',
                    position: 'left top',
                    closeOnClick: false,
                    delay: false,
                    icon: false,
                    messageHeight: 300,
                    msg: "Click to confirm delete! &nbsp;&nbsp;<br/><h6 style='color:#fff; margin-top: 20px;'> ALLOCATION: " + sname + "</h6><br/><button class='btn btn-danger pl-4 p-3 pr-4 mt-n2' style='font-size:12px; width:100%;' onClick=\"javascript:deleteAllocation('" + sid + "','" + pid + "');\">DELETE <i class='fa fa-trash'></i></button>"
                });
                resizeFrame();
                //$(window).scrollTop({top: 0, behavior: 'smooth'});	


                //$(".lobibox-window").animate({scrollTop:0}, "smooth");
                //window.scrollTo({ top: 0, behavior: 'smooth' });	
                //$('div.lobibox.lobibox-window').scrollTop({top: 0, behavior: 'smooth'});	


            });



        }
    });
}
/*

*/
/*

*/
////// delete allocation
function deleteAllocation(s, p) {

    $.ajax({
        url: host + "/api/deleteAllocation",
        type: "GET",
        dataType: 'jsonp',
        timeout: 5000,
        data: { email: localStorage.email, alid: s },
        success: function (data) {

            $('.lobibox-close').click();
            //getForm(b);
            ///getFields(fn);   /clear instead and redraw
            var table = $('#default-datatable').DataTable();
            table.clear().draw();

            ////////
            $.ajax({
                url: host + "/api/loadallo/",
                type: "GET",
                dataType: 'jsonp',
                timeout: 5000,
                data: { email: localStorage.email, pid: p },
                success: function (data) {
                    console.log(data.result);
                    table.rows.add(data.result).draw(false);

                }
            });

            //////// 

            Lobibox.notify('default', {
                size: 'mini',
                position: 'center top',
                msg: data.msg
            });


        },
        error: function (request, status, err) {
            if (status == "timeout") {

                Lobibox.notify('default', {
                    size: 'mini',
                    position: 'center top',
                    msg: 'Slow Network!'
                });

            } else {

                Lobibox.notify('default', {
                    size: 'mini',
                    position: 'center top',
                    msg: 'Error connecting Server!'
                });
            }
        }
    });
}
/*

*/
//////load operations
function loadop(pid) {

    //$("#bookingHistory").html('<i class="fa fa-spinner fa-spin"></i>');
    $.ajax({
        url: host + "/api/loadop/",
        type: "GET",
        dataType: 'jsonp',
        timeout: 50000,
        data: { email: localStorage.email, pid: pid },
        success: function (data) {
            //console.log(data.result);	
            // alert(data.cid);
            //document.getElementById("cid").value = data.cid;	   
            var table = $('#default-datatable').DataTable({
                data: data.result,
                select: true,
                dom: 'lrt',
                responsive: true,
                bLengthChange: false,
                pageLength: 50,
                scrollX: true,
                columns: [
                    { data: 'opid', title: 'ID', },
                    { data: 'optype', title: 'OPERATIONS', },
                    {
                        data: 'opcost',
                        "sClass": "right",
                        "mRender": function (data, type, full) {

                            return "<span style='float:right; margin-right: 20px;'>&#8358;" + (full.opcost).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') + "</span>";

                        },
                        title: "MONTHLY COST"
                    },
                    {
                        data: 'opgrowth',
                        "sClass": "left share-width",
                        "mRender": function (data, type, full) {

                            return full.opgrowth + "%";

                        },
                        title: "YEARLY GROWTH %"
                    },

                    { data: null }
                ],
                "columnDefs": [{ "targets": -1, "data": null, "defaultContent": "<button class='btn btn-primary cursor-pointer update-btn' style='width:90px;'>UPDATE</button> <button class='btn fa fa-trash cursor-pointer delete-btn' style='width:60px !important;'> </button>" }],
                "scrollX": true,
                "paging": true,
                "ordering": true,
                "responsive": true,
                "aaSorting": [[0, "desc"]],
                "pagingType": "full_numbers"
            });




            resizeFrame();
            table.column(0).visible(false);
            //table.column( 0 ).data().join('<button>Click!</button>');


            $('#default-datatable tbody').on('click', 'button.update-btn', function () {
                //var d = table.row(this).data();
                localStorage.modal = "operations";
                var c = table.row($(this).parents('tr')).data();
                //alert( 'You clicked on '+c.staffid+'\'s row' );
                //location.href = src+"?s="+c.staffid		  

                $("#modal-animation-1").modal({ backdrop: 'static', keyboard: false });
                document.getElementById('profileDetails').src = 'editoperations.html?o=' + c.opid + "&t=" + Math.floor(Math.random() * 9000000) + 1000000;
                document.getElementById('profileDetails').height = "350px";
                document.getElementById("modal-title").innerHTML = "<i class='fa fa-cog mr-2'></i><strong>EDIT OPERATIONS</strong>";
                resizeFrame();

            });

            $('#default-datatable tbody').on('click', 'button.delete-btn', function () {

                //var d = table.row(this).data();
                var c = table.row($(this).parents('tr')).data();
                var sid = c.opid;
                var sname = c.optype


                var lobibox = Lobibox.notify('info', {
                    size: 'mini',
                    title: '<i class="fa fa-trash"></i> Confirm Delete',
                    position: 'left top',
                    closeOnClick: false,
                    delay: false,
                    icon: false,
                    messageHeight: 300,
                    msg: "Click to confirm delete! &nbsp;&nbsp;<br/><h6 style='color:#fff; margin-top: 20px;'> OPERATION: " + sname + "</h6><br/><button class='btn btn-danger pl-4 p-3 pr-4 mt-n2' style='font-size:12px; width:100%;' onClick=\"javascript:deleteOperation('" + sid + "','" + pid + "');\">DELETE <i class='fa fa-trash'></i></button>"
                });
                resizeFrame();
                //$(window).scrollTop({top: 0, behavior: 'smooth'});	


                //$(".lobibox-window").animate({scrollTop:0}, "smooth");
                //window.scrollTo({ top: 0, behavior: 'smooth' });	
                //$('div.lobibox.lobibox-window').scrollTop({top: 0, behavior: 'smooth'});	


            });



        }
    });
}
/*

*/
////// delete operation
function deleteOperation(s, p) {

    $.ajax({
        url: host + "/api/deleteOperation",
        type: "GET",
        dataType: 'jsonp',
        timeout: 5000,
        data: { email: localStorage.email, opid: s },
        success: function (data) {

            $('.lobibox-close').click();
            //getForm(b);
            ///getFields(fn);   /clear instead and redraw
            var table = $('#default-datatable').DataTable();
            table.clear().draw();

            ////////
            $.ajax({
                url: host + "/api/loadop/",
                type: "GET",
                dataType: 'jsonp',
                timeout: 5000,
                data: { email: localStorage.email, pid: p },
                success: function (data) {
                    console.log(data.result);
                    table.rows.add(data.result).draw(false);

                }
            });

            //////// 

            Lobibox.notify('default', {
                size: 'mini',
                position: 'center top',
                msg: data.msg
            });


        },
        error: function (request, status, err) {
            if (status == "timeout") {

                Lobibox.notify('default', {
                    size: 'mini',
                    position: 'center top',
                    msg: 'Slow Network!'
                });

            } else {

                Lobibox.notify('default', {
                    size: 'mini',
                    position: 'center top',
                    msg: 'Error connecting Server!'
                });
            }
        }
    });
}
/*

*/

//////load owners
function loadbod(pid) {

    //$("#bookingHistory").html('<i class="fa fa-spinner fa-spin"></i>');
    $.ajax({
        url: host + "/api/loadbod/",
        type: "GET",
        dataType: 'jsonp',
        timeout: 50000,
        data: { email: localStorage.email, pid: pid },
        success: function (data) {
            //console.log(data.result);	
            // alert(data.cid);
            //document.getElementById("cid").value = data.cid;	   
            var table = $('#default-datatable').DataTable({
                data: data.result,
                select: true,
                dom: 'lrt',
                responsive: true,
                bLengthChange: false,
                pageLength: 50,
                scrollX: true,
                columns: [
                    { data: 'staffid', title: 'ID', },
                    { data: 'name', title: 'NAME' },
                    {
                        data: 'share',
                        "sClass": "left share-width",
                        "mRender": function (data, type, full) {

                            return full.share + "%";

                        },
                        title: "SHARE"
                    },
                    /*{ data: 'prof', title: 'PROFESSION' },*/
                    {
                        data: 'phone',
                        "sClass": "left",
                        "mRender": function (data, type, full) {

                            return full.phone + "<br/>" + full.email;

                        },
                        title: "DETAILS"
                    },

                    { data: null }
                ],
                "columnDefs": [{ "targets": -1, "data": null, "defaultContent": "<button class='btn btn-primary cursor-pointer update-btn' style='width:90px;'>UPDATE</button> <button class='btn fa fa-trash cursor-pointer delete-btn' style='width:60px !important;'> </button>" }],
                "scrollX": true,
                "paging": true,
                "ordering": true,
                "responsive": true,
                "aaSorting": [[0, "desc"]],
                "pagingType": "full_numbers"
            });




            resizeFrame();
            table.column(0).visible(false);
            //table.column( 0 ).data().join('<button>Click!</button>');


            $('#default-datatable tbody').on('click', 'button.update-btn', function () {
                //var d = table.row(this).data();
                var c = table.row($(this).parents('tr')).data();
                //alert( 'You clicked on '+c.staffid+'\'s row' );
                //location.href = src+"?s="+c.staffid		  

                $("#modal-animation-1").modal({ backdrop: 'static', keyboard: false });
                document.getElementById('profileDetails').src = 'editowner.html?s=' + c.staffid + "&t=" + Math.floor(Math.random() * 9000000) + 1000000;
                document.getElementById('profileDetails').height = "450px";
                document.getElementById("modal-title").innerHTML = "<i class='fa fa-user-circle mr-2'></i><strong>EDIT OWNER</strong>";


            });

            $('#default-datatable tbody').on('click', 'button.delete-btn', function () {

                //var d = table.row(this).data();
                var c = table.row($(this).parents('tr')).data();
                var sid = c.staffid;
                var sname = c.name;


                var lobibox = Lobibox.notify('info', {
                    size: 'mini',
                    title: '<i class="fa fa-trash"></i> Confirm Delete',
                    position: 'left top',
                    closeOnClick: false,
                    delay: false,
                    icon: false,
                    messageHeight: 300,
                    msg: "Click to confirm delete! &nbsp;&nbsp;<br/><h6 style='color:#fff; margin-top: 20px;'> OWNER: " + sname + "</h6><br/><button class='btn btn-danger pl-4 p-3 pr-4 mt-n2' style='font-size:12px; width:100%;' onClick=\"javascript:deleteOwner('" + sid + "','" + pid + "');\">DELETE <i class='fa fa-trash'></i></button>"
                });
                resizeFrame();
                //$(window).scrollTop({top: 0, behavior: 'smooth'});	


                //$(".lobibox-window").animate({scrollTop:0}, "smooth");
                //window.scrollTo({ top: 0, behavior: 'smooth' });	
                //$('div.lobibox.lobibox-window').scrollTop({top: 0, behavior: 'smooth'});	


            });



        }
    });
}
/*

*/
////// delete owner
function deleteOwner(s, p) {

    $.ajax({
        url: host + "/api/deleteOwner",
        type: "GET",
        dataType: 'jsonp',
        timeout: 5000,
        data: { email: localStorage.email, sid: s },
        success: function (data) {

            $('.lobibox-close').click();
            //getForm(b);
            ///getFields(fn);   /clear instead and redraw
            var table = $('#default-datatable').DataTable();
            table.clear().draw();

            ////////
            $.ajax({
                url: host + "/api/loadbod/",
                type: "GET",
                dataType: 'jsonp',
                timeout: 5000,
                data: { email: localStorage.email, pid: p },
                success: function (data) {
                    console.log(data.result);
                    table.rows.add(data.result).draw(false);

                }
            });

            //////// 

            Lobibox.notify('default', {
                size: 'mini',
                position: 'center top',
                msg: data.msg
            });


        },
        error: function (request, status, err) {
            if (status == "timeout") {

                Lobibox.notify('default', {
                    size: 'mini',
                    position: 'center top',
                    msg: 'Slow Network!'
                });

            } else {

                Lobibox.notify('default', {
                    size: 'mini',
                    position: 'center top',
                    msg: 'Error connecting Server!'
                });
            }
        }
    });
}
/*

*/
///// load managers
function loadman(pid) {

    //$("#bookingHistory").html('<i class="fa fa-spinner fa-spin"></i>');
    $.ajax({
        url: host + "/api/loadman/",
        type: "GET",
        dataType: 'jsonp',
        timeout: 50000,
        data: { email: localStorage.email, pid: pid },
        success: function (data) {
            //console.log(data.result);	
            // alert(data.cid);
            //document.getElementById("cid").value = data.cid;	   
            var table = $('#second-datatable').DataTable({
                data: data.result,
                select: true,
                dom: 'lrt',
                responsive: true,
                bLengthChange: false,
                pageLength: 50,
                scrollX: true,
                columns: [
                    { data: 'staffid', title: 'ID', },
                    { data: 'name', title: 'NAME' },
                    { data: 'desig', title: 'DESIGNATION' },
                    {
                        data: 'phone',
                        "sClass": "left",
                        "mRender": function (data, type, full) {

                            return full.phone + "<br/>" + full.email;

                        },
                        title: "DETAILS"
                    },

                    { data: null }
                ],
                "columnDefs": [{ "targets": -1, "data": null, "defaultContent": "<button class='btn btn-primary cursor-pointer update-btn' style='width:90px;'>UPDATE</button> <button class='btn fa fa-trash cursor-pointer delete-btn' style='width:60px !important;'> </button>" }],
                "scrollX": true,
                "paging": true,
                "ordering": true,
                "responsive": true,
                "aaSorting": [[0, "desc"]],
                "pagingType": "full_numbers"
            });




            resizeFrame();
            table.column(0).visible(false);
            //table.column( 0 ).data().join('<button>Click!</button>');


            $('#second-datatable tbody').on('click', 'button.update-btn', function () {
                //var d = table.row(this).data();
                var c = table.row($(this).parents('tr')).data();
                //alert( 'You clicked on '+c.staffid+'\'s row' );
                //location.href = src+"?s="+c.staffid		  

                $("#modal-animation-2").modal({ backdrop: 'static', keyboard: false });
                document.getElementById('ifm').src = 'editmanager.html?s=' + c.staffid + "&t=" + Math.floor(Math.random() * 9000000) + 1000000;
                document.getElementById('ifm').height = "450px";
                document.getElementById("modal-title-2").innerHTML = "<i class='fa fa-user-circle mr-2'></i><strong>EDIT MANAGER</strong>";


            });


            $('#second-datatable tbody').on('click', 'button.delete-btn', function () {

                //var d = table.row(this).data();
                var c = table.row($(this).parents('tr')).data();
                var sid = c.staffid;
                var sname = c.name;
                var sdesig = c.desig;


                var lobibox = Lobibox.notify('info', {
                    size: 'mini',
                    title: '<i class="fa fa-trash"></i> Confirm Delete',
                    position: 'left top',
                    closeOnClick: false,
                    delay: false,
                    icon: false,
                    messageHeight: 300,
                    msg: "Click to confirm delete! &nbsp;&nbsp;<br/><h6 style='color:#fff; margin-top: 20px;'> " + sdesig + ": " + sname + "</h6><br/><button class='btn btn-danger pl-4 p-3 pr-4 mt-n2' style='font-size:12px; width:100%;' onClick=\"javascript:deleteManager('" + sid + "','" + pid + "');\">DELETE <i class='fa fa-trash'></i></button>"
                });
                resizeFrame();
                //$(window).scrollTop({top: 0, behavior: 'smooth'});					 
                //$(".lobibox-window").animate({scrollTop:0}, "smooth");
                //window.scrollTo({ top: 0, behavior: 'smooth' });	
                //$('div.lobibox.lobibox-window').scrollTop({top: 0, behavior: 'smooth'});	


            });


        }
    });
}
/*

*/
////// delete owner
function deleteManager(s, p) {

    $.ajax({
        url: host + "/api/deleteManager",
        type: "GET",
        dataType: 'jsonp',
        timeout: 5000,
        data: { email: localStorage.email, sid: s },
        success: function (data) {

            $('.lobibox-close').click();
            //getForm(b);
            ///getFields(fn);   /clear instead and redraw
            var table = $('#second-datatable').DataTable();
            table.clear().draw();

            ////////
            $.ajax({
                url: host + "/api/loadman/",
                type: "GET",
                dataType: 'jsonp',
                timeout: 5000,
                data: { email: localStorage.email, pid: p },
                success: function (data) {
                    console.log(data.result);
                    table.rows.add(data.result).draw(false);

                }
            });

            //////// 

            Lobibox.notify('default', {
                size: 'mini',
                position: 'center top',
                msg: data.msg
            });


        },
        error: function (request, status, err) {
            if (status == "timeout") {

                Lobibox.notify('default', {
                    size: 'mini',
                    position: 'center top',
                    msg: 'Slow Network!'
                });

            } else {

                Lobibox.notify('default', {
                    size: 'mini',
                    position: 'center top',
                    msg: 'Error connecting Server!'
                });
            }
        }
    });
}
/*

*/
// load projects
function loadPrj() {

    //$("#bookingHistory").html('<i class="fa fa-spinner fa-spin"></i>');
    $.ajax({
        url: "https://redan.quantumcloud.ng/api/loadPrj/",
        type: "GET",
        dataType: 'jsonp',
        timeout: 50000,
        data: { email: localStorage.email },
        success: function (data) {
            //console.log(data.result);	
            //alert(data.cid);
            document.getElementById("cid").value = data.cid;
            var table = $('#default-datatable').DataTable({
                data: data.result,
                select: true,
                dom: 'lrt',
                responsive: true,
                bLengthChange: false,
                pageLength: 50,
                scrollX: true,
                columns: [
                    { data: 'pid', title: 'ID', },
                    {
                        data: 'name',
                        "sClass": "left",
                        "mRender": function (data, type, full) {

                            return "<b>PROJECT:</b> " + full.name + "<br/><b>LOCATION:</b> " + full.loc;

                        },
                        title: "NAME/LOCATION"
                    },
                    {
                        data: 'status',
                        "sClass": "left",
                        "mRender": function (data, type, full) {

                            return full.status + "<br/>LEVEL: " + full.level + "%";

                        },
                        title: "STATUS"
                    },
                    {
                        data: 'start',
                        "sClass": "left",
                        "mRender": function (data, type, full) {

                            return full.start + " - " + full.end + "<br/><b>COST:</b> &#8358;" + (full.cost).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');

                        },
                        title: "DURATION/COST"
                    },
                    { data: 'desn', title: 'DESCRIPTION' },


                    { data: null }
                ],
                "columnDefs": [{ "targets": -1, "data": null, "defaultContent": "<button class='btn btn-primary cursor-pointer update-btn' style='width:90px;'>UPDATE</button>" }, { "targets": 3, "class": "wrapok" }],
                "scrollX": true,
                "paging": true,
                "ordering": true,
                "responsive": true,
                "aaSorting": [[0, "desc"]],
                "pagingType": "full_numbers"
            });


            /*setInterval( function () {
            table.ajax.reload();
            }, 30000 );*/


            $('#default-datatable tbody').on('click', 'tr', function () {

                if ($(this).hasClass('selected')) {
                    $(this).removeClass('selected');
                }
                else {
                    table.$('tr.selected').removeClass('selected');
                    $(this).addClass('selected');
                }
            });

            resizeFrame();
            table.column(0).visible(false);
            //table.column( 0 ).data().join('<button>Click!</button>');

            var src = "settingsPrjUpdate.html";
            /*if(cat == "BOD" ){ src = "settingsBodUpdate.html"; table.column( 3 ).visible( false ); }
            if(cat == "REP" ){ src = "settingsRepUpdate.html"; table.column( 3 ).visible( false ); }
            if(cat == "PRO" ){ src = "settingsProUpdate.html"; table.column( 2 ).visible( false );}*/

            $('#default-datatable tbody').on('click', 'button', function () {
                //var d = table.row(this).data();
                var c = table.row($(this).parents('tr')).data();
                //alert( 'You clicked on '+c.staffid+'\'s row' );
                location.href = src + "?p=" + c.pid


            });



        }
    });
}
/*

*/
// load projects
function loadProjects() {

    //$("#bookingHistory").html('<i class="fa fa-spinner fa-spin"></i>');
    $.ajax({
        url: "https://redan.quantumcloud.ng/api/loadPrj/",
        type: "GET",
        dataType: 'jsonp',
        timeout: 50000,
        data: { email: localStorage.email },
        success: function (data) {
            //console.log(data.result);	
            //alert(data.cid);
            //document.getElementById("cid").value = data.cid;	   
            var table = $('#default-datatable').DataTable({
                data: data.result,
                select: true,
                dom: 'lrt',
                responsive: true,
                bLengthChange: false,
                pageLength: 50,
                scrollX: true,
                columns: [
                    { data: 'pid', title: 'ID', },
                    {
                        data: 'name',
                        "sClass": "left",
                        "mRender": function (data, type, full) {

                            return "<b>PROJECT:</b> " + full.name + "<br/><b>LOCATION:</b> " + full.loc + "<br/><b>COMPLETION:</b> " + full.level + "%";

                        },
                        title: "NAME/LOCATION"
                    },
                    {
                        data: 'start',
                        "sClass": "left",
                        "mRender": function (data, type, full) {

                            return full.start + " - " + full.end + "<br/><b>COST:</b> &#8358;" + (full.cost).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');

                        },
                        title: "DURATION/COST"
                    },
                    { data: 'desn', title: 'DESCRIPTION' },


                    { data: null }
                ],
                "columnDefs": [{ "targets": -1, "data": null, "defaultContent": "<button class='btn btn-primary cursor-pointer update-btn' style='width:90px;'>UPDATE</button>" }, { "targets": 3, "class": "wrapok" }],
                "scrollX": true,
                "paging": true,
                "ordering": true,
                "responsive": true,
                "aaSorting": [[0, "desc"]],
                "pagingType": "full_numbers"
            });


            /*setInterval( function () {
            table.ajax.reload();
            }, 30000 );*/


            $('#default-datatable tbody').on('click', 'tr', function () {

                if ($(this).hasClass('selected')) {
                    $(this).removeClass('selected');
                }
                else {
                    table.$('tr.selected').removeClass('selected');
                    $(this).addClass('selected');
                }
            });

            //resizeFrame();
            table.column(0).visible(false);
            //table.column( 0 ).data().join('<button>Click!</button>');

            var src = "settingsPrjUpdate.html";
            /*if(cat == "BOD" ){ src = "settingsBodUpdate.html"; table.column( 3 ).visible( false ); }
            if(cat == "REP" ){ src = "settingsRepUpdate.html"; table.column( 3 ).visible( false ); }
            if(cat == "PRO" ){ src = "settingsProUpdate.html"; table.column( 2 ).visible( false );}*/

            $('#default-datatable tbody').on('click', 'button', function () {
                //var d = table.row(this).data();
                var c = table.row($(this).parents('tr')).data();
                //alert( 'You clicked on '+c.staffid+'\'s row' );
                location.href = src + "?p=" + c.pid


            });



        }
    });
}
/*

*/
// get user subscriptions
function getSubsns(u) {

    //$("#bookingHistory").html('<i class="fa fa-spinner fa-spin"></i>');
    $.ajax({
        url: host + "/api/subsns/",
        type: "GET",
        dataType: 'jsonp',
        timeout: 50000,
        data: { email: u },
        success: function (data) {
            //console.log(data.result);		   
            var table = $('#default-datatable').DataTable({
                data: data.result,
                select: true,
                responsive: true,
                bLengthChange: false,
                pageLength: 50,
                scrollX: true,
                columns: [
                    { data: 'yID', title: 'ID', },
                    { data: 'transid', title: 'MEMO ID.', },
                    { data: 'mfrom', title: "FROM" },
                    { data: 'mto', title: "TO" },
                    { data: 'subj', title: "SUBJECT" },
                    { data: 'created', title: "DATE" },
                    { data: null }
                ],
                "columnDefs": [{ "targets": -1, "data": null, "defaultContent": "<button class='btn btn-inverse-dark cursor-pointer manage-post' style='width:125px;'>MANAGE MEMO</button>" }],
                "scrollX": true,
                "paging": true,
                "ordering": true,
                "responsive": true,
                "aaSorting": [[0, "desc"]],
                "pagingType": "full_numbers"
            });


            /*setInterval( function () {
            table.ajax.reload();
            }, 30000 );*/

            $('#type-filter-tb')
                .on('change', function (event) {
                    var search_ids = '';
                    $('#type-filter-tb :selected').each(function (i_item, selected) {
                        search_ids += $(selected).val();
                    });
                    //alert(search_ids);
                    //search_ids = search_ids.replace(/\|$/g, '');
                    table
                        .column(table.column(2))
                        .search(search_ids, true, false)
                        .draw();
                });

            $('#default-datatable tbody').on('click', 'tr', function () {

                if ($(this).hasClass('selected')) {
                    $(this).removeClass('selected');
                }
                else {
                    table.$('tr.selected').removeClass('selected');
                    $(this).addClass('selected');
                }
            });

            table.column(0).visible(false);
            //table.column( 3 ).visible( false );
            //table.column( 0 ).data().join('<button>Click!</button>');


            $('#default-datatable tbody').on('click', 'button.manage-post', function () {
                //var d = table.row(this).data();
                var c = table.row($(this).parents('tr')).data();
                //alert( 'You clicked on '+c.tid+'\'s row' );
                if (localStorage.email) {
                    //alert( 'You clicked on '+c.bID+'\'s row' );

                    if (localStorage.pid) {
                        delete localStorage.pid;
                    }
                    localStorage.pid = c.transid;

                    Lobibox.window({
                        title: '    <div class="container-fluid" style="width:100% !important; position: fixed; margin-top:35px; height:50px;"><!--<h6 id="slide_title" class="btn btn-secondary" style="width:220px; height:20px;">TITLE</h6>--><div class="owl-carousel"><!--<div><button class="btn btn-primary p-3 big" id="1" onClick="reply_click(this.id)" style="width:220px;">Personal Information</button></div>--><div><button class="btn btn-primary p-3 big" id="2" onClick="reply_click(this.id);" style="width:220px;">Memo</button></div><div><button class="btn btn-primary p-3" id="3" onClick="reply_click(this.id)" style="width:220px;">History</button></div><div><button class="btn btn-primary p-3" id="4" onClick="reply_click(this.id)" style="width:220px;">Summary</button></div><div><button class="btn btn-primary p-3" id="9" onClick="reply_click(this.id)" style="width:220px;">Attachments</button></div></div></div><span style="margin-left:10px; margin-bottom: 200px !important;">MANAGE MEMO <span id="bizid" class="pt-2" style="font-size: 12px;"><i class="fa fa-briefcase"></i> ' + c.transid + '</span></span> ',
                        /*url: 'booking.html',*/
                        content: "<iframe id='ifm' class='ifm' src='company.html?oid=" + c.transid + "'scrolling='no' frameborder='0' style=\"background:url('assets/images/ajax-loader.gif') center center no-repeat; width:100%;\"></iframe>",
                        modal: true,
                        closeButton: true,
                        draggable: false,
                        showClass: 'fadeInRight',
                        hideClass: 'fadeOutRight',
                        beforeClose: function () {
                            //location.reload();
                            //var table =  $('#default-datatable').DataTable();
                            table.clear().destroy();
                            document.getElementById("default-datatable").innerHTML = "";
                            getSubsns(localStorage.email);
                        },
                        height: $(document).height(),
                        width: $(document).width()

                    });

                    var $owl = $('.owl-carousel');

                    $owl.children().each(function (index) {
                        $(this).attr('data-position', index); // NB: .attr() instead of .data()
                        //$(this).attr( event.item.index, 1).style.backgroundColor = "#FFCC00";
                    });

                    $owl.owlCarousel({
                        margin: 10,
                        autoWidth: true,
                        loop: false,
                        items: 8,
                    });

                    /*$owl.on('changed.owl.carousel', function(e){
                            idx = e.item.index;
                            //$('.owl-item.big').removeClass('big');
                            $('.big').removeClass('big');
                            //$('.owl-item.medium').removeClass('medium');
                             $('.owl-item').eq(idx).addClass('big');
                             //document.getElementById(eq(idx+1)).click();
                           // $('.owl-item').eq(idx).addClass('big');
                            //$('.owl-item').eq(idx-1).addClass('medium');
                            //$('.owl-item').eq(idx+1).addClass('medium');
                        });*/
                    /*$(document).on('click', '.owl-item', function() {
                      owlIndex = $(this).index();
                      $('.big').removeClass('big');
                      $('.owl-item').eq(owlIndex).addClass('big');
                      //$('.owl-stage-outer').trigger('to.owl.carousel', owlIndex);
                    });*/

                    /*$(document).on('click', '.owl-item>div', function() {
                      // see https://owlcarousel2.github.io/OwlCarousel2/docs/api-events.html#to-owl-carousel
                      var $speed = 300;  // in ms
                      $owl.trigger('to.owl.carousel', [$(this).data( 'position' ), $speed] );
                    });	*/
                    //location.href = 'index.html?u='+c.bID;		  
                    //$("#modal-2").modal({backdrop: 'static', keyboard: false});  
                    //$('#modal-2').modal("show");

                }
            });



        }
    });
}
/*

*/
// get my subscriptions
function mySubsns(u) {

    //$("#bookingHistory").html('<i class="fa fa-spinner fa-spin"></i>');
    $.ajax({
        url: host + "/api/mySubsns/",
        type: "GET",
        dataType: 'jsonp',
        timeout: 50000,
        data: { email: u },
        success: function (data) {
            //console.log(data.result);		   
            var table = $('#default-datatable').DataTable({
                data: data.result,
                select: true,
                responsive: true,
                bLengthChange: false,
                pageLength: 50,
                scrollX: true,
                columns: [
                    { data: 'yID', title: 'ID', },
                    { data: 'transid', title: 'PLAN ID.', },
                    { data: 'status', title: 'STATUS', },
                    {
                        data: 'amt',
                        "sClass": "left",
                        "mRender": function (data, type, full) {
                            return "<div style='float:right'>&#8358; " + (full.amt * 0.01).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') + " </div>";
                        },
                        title: "AMOUNT", className: "alignright"
                    },
                    { data: 'created', title: "DATE" },
                ],
                "columnDefs": [{}],
                "scrollX": true,
                "paging": true,
                "ordering": true,
                "responsive": true,
                "aaSorting": [[0, "desc"]],
                "pagingType": "full_numbers"
            });


            /*setInterval( function () {
            table.ajax.reload();
            }, 30000 );*/

            $('#type-filter-tb')
                .on('change', function (event) {
                    var search_ids = '';
                    $('#type-filter-tb :selected').each(function (i_item, selected) {
                        search_ids += $(selected).val();
                    });
                    //alert(search_ids);
                    //search_ids = search_ids.replace(/\|$/g, '');
                    table
                        .column(table.column(2))
                        .search(search_ids, true, false)
                        .draw();
                });

            $('#default-datatable tbody').on('click', 'tr', function () {

                if ($(this).hasClass('selected')) {
                    $(this).removeClass('selected');
                }
                else {
                    table.$('tr.selected').removeClass('selected');
                    $(this).addClass('selected');
                }
            });

            table.column(0).visible(false);
            //table.column( 3 ).visible( false );
            //table.column( 0 ).data().join('<button>Click!</button>');


            $('#default-datatable tbody').on('click', 'button.manage-post', function () {
                //var d = table.row(this).data();
                var c = table.row($(this).parents('tr')).data();
                //alert( 'You clicked on '+c.tid+'\'s row' );
                if (localStorage.email) {
                    //alert( 'You clicked on '+c.bID+'\'s row' );

                    if (localStorage.pid) {
                        delete localStorage.pid;
                    }
                    localStorage.pid = c.transid;

                    Lobibox.window({
                        title: '    <div class="container-fluid" style="width:100% !important; position: fixed; margin-top:35px; height:50px;"><!--<h6 id="slide_title" class="btn btn-secondary" style="width:220px; height:20px;">TITLE</h6>--><div class="owl-carousel"><!--<div><button class="btn btn-primary p-3 big" id="1" onClick="reply_click(this.id)" style="width:220px;">Personal Information</button></div>--><div><button class="btn btn-primary p-3 big" id="2" onClick="reply_click(this.id);" style="width:220px;">Company Details</button></div><div><button class="btn btn-primary p-3" id="3" onClick="reply_click(this.id)" style="width:220px;">Leadership Structure</button></div><div><button class="btn btn-primary p-3" id="4" onClick="reply_click(this.id)" style="width:220px;">Business Information</button></div><div><button class="btn btn-primary p-3" id="5" onClick="reply_click(this.id)" style="width:220px;">Products & Services</button></div><div><button class="btn btn-primary p-3" id="6" onClick="reply_click(this.id)" style="width:220px;">Market Analysis</button></div><div><button class="btn btn-primary p-3" id="7" onClick="reply_click(this.id)" style="width:220px;">Financial Analysis</button></div><div><button class="btn btn-primary p-3" id="8" onClick="reply_click(this.id)" style="width:220px;">Funding Requirement</button></div><div><button class="btn btn-primary p-3" id="9" onClick="reply_click(this.id)" style="width:220px;">Documentations</button></div></div></div><span style="margin-left:10px; margin-bottom: 200px !important;">MANAGE PLAN <span id="bizid" class="pt-2" style="font-size: 12px;"><i class="fa fa-briefcase"></i> ' + c.transid + '</span></span> ',
                        /*url: 'booking.html',*/
                        content: "<iframe id='ifm' class='ifm' src='company.html?oid=" + c.transid + "'scrolling='no' frameborder='0' style=\"background:url('assets/images/ajax-loader.gif') center center no-repeat; width:100%;\"></iframe>",
                        modal: true,
                        closeButton: true,
                        draggable: false,
                        showClass: 'fadeInRight',
                        hideClass: 'fadeOutRight',
                        beforeClose: function () {
                            //location.reload();
                            //var table =  $('#default-datatable').DataTable();
                            table.clear().destroy();
                            document.getElementById("default-datatable").innerHTML = "";
                            getSubsns(localStorage.email);
                        },
                        height: $(document).height(),
                        width: $(document).width()

                    });

                    var $owl = $('.owl-carousel');

                    $owl.children().each(function (index) {
                        $(this).attr('data-position', index); // NB: .attr() instead of .data()
                        //$(this).attr( event.item.index, 1).style.backgroundColor = "#FFCC00";
                    });

                    $owl.owlCarousel({
                        margin: 10,
                        autoWidth: true,
                        loop: false,
                        items: 8,
                    });

                    /*$owl.on('changed.owl.carousel', function(e){
                            idx = e.item.index;
                            //$('.owl-item.big').removeClass('big');
                            $('.big').removeClass('big');
                            //$('.owl-item.medium').removeClass('medium');
                             $('.owl-item').eq(idx).addClass('big');
                             //document.getElementById(eq(idx+1)).click();
                           // $('.owl-item').eq(idx).addClass('big');
                            //$('.owl-item').eq(idx-1).addClass('medium');
                            //$('.owl-item').eq(idx+1).addClass('medium');
                        });*/
                    /*$(document).on('click', '.owl-item', function() {
                      owlIndex = $(this).index();
                      $('.big').removeClass('big');
                      $('.owl-item').eq(owlIndex).addClass('big');
                      //$('.owl-stage-outer').trigger('to.owl.carousel', owlIndex);
                    });*/

                    /*$(document).on('click', '.owl-item>div', function() {
                      // see https://owlcarousel2.github.io/OwlCarousel2/docs/api-events.html#to-owl-carousel
                      var $speed = 300;  // in ms
                      $owl.trigger('to.owl.carousel', [$(this).data( 'position' ), $speed] );
                    });	*/
                    //location.href = 'index.html?u='+c.bID;		  
                    //$("#modal-2").modal({backdrop: 'static', keyboard: false});  
                    //$('#modal-2').modal("show");

                }
            });



        }
    });
}
/*

*/
// Load Board for movers
function loadboard4() {

    //$("#bookingHistory").html('<i class="fa fa-spinner fa-spin"></i>');
    $.ajax({
        url: "https://redan.quantumcloud.ng/api/loadboard4/",
        type: "GET",
        dataType: 'jsonp',
        timeout: 50000,
        data: { email: localStorage.email },
        success: function (data) {
            //console.log(data.result);		   
            var table = $('#third-datatable').DataTable({
                data: data.result,
                select: true,
                responsive: true,
                bLengthChange: false,
                pageLength: 50,
                scrollX: true,
                columns: [
                    { data: 'moid', title: 'MOID', },
                    { data: 'mcode', title: 'REF. ID' },
                    { data: 'mfrom', title: "LOCATION" },
                    { data: 'mtype', title: "CATEGORY" },
                    { data: 'mfromdate', title: "AVAIL. DATE" },
                    { data: null }
                ],
                "columnDefs": [{ "targets": -1, "data": null, "defaultContent": "<button class='btn btn-inverse-dark cursor-pointer' style='width:90px;'>DETAILS</button>" }],
                "scrollX": true,
                "paging": true,
                "ordering": true,
                "responsive": true,
                "aaSorting": [[0, "desc"]],
                "pagingType": "full_numbers"
            });


            /*setInterval( function () {
            table.ajax.reload();
            }, 30000 );*/

            $('#type-filter-mb')
                .on('change', function (event) {
                    var search_ids = '';
                    $('#type-filter-mb :selected').each(function (i_item, selected) {
                        search_ids += $(selected).val();
                    });
                    //alert(search_ids);
                    //search_ids = search_ids.replace(/\|$/g, '');
                    table
                        .column(table.column(2))
                        .search(search_ids, true, false)
                        .draw();
                });

            $('#third-datatable tbody').on('click', 'tr', function () {

                if ($(this).hasClass('selected')) {
                    $(this).removeClass('selected');
                }
                else {
                    table.$('tr.selected').removeClass('selected');
                    $(this).addClass('selected');
                }
            });

            table.column(0).visible(false);
            //table.column( 0 ).data().join('<button>Click!</button>');


            $('#third-datatable tbody').on('click', 'button', function () {
                //var d = table.row(this).data();
                var c = table.row($(this).parents('tr')).data();
                //alert( 'You clicked on '+c.tid+'\'s row' );
                if (localStorage.email) {
                    //alert( 'You clicked on '+c.bID+'\'s row' ); 
                    Lobibox.window({
                        title: '    <span style="margin-left:10px;">MOVER DETAILS</span>',
                        /*url: 'booking.html',*/
                        content: "<iframe id='ifm' class='ifm' src='mover-details.html?m=" + c.moid + "'   scrolling='no' frameborder='0' style=\"background:url('assets/images/ajax-loader.gif') center center no-repeat; width:100%;\"></iframe>",
                        modal: true,
                        closeButton: true,
                        draggable: false,
                        showClass: 'fadeInRight',
                        hideClass: 'fadeOutRight',
                        beforeClose: function () {
                            //location.reload();
                        },
                        height: $(document).height(),
                        width: $(document).width()

                    });


                    //location.href = 'index.html?u='+c.bID;		  
                    //$("#modal-2").modal({backdrop: 'static', keyboard: false});  
                    //$('#modal-2').modal("show");

                }
            });



        }
    });
}
/*

*/

// Load Board for bookings
function loadboard3() {

    //$("#bookingHistory").html('<i class="fa fa-spinner fa-spin"></i>');
    $.ajax({
        url: "https://redan.quantumcloud.ng/api/loadboard3/",
        type: "GET",
        dataType: 'jsonp',
        timeout: 50000,
        data: { email: localStorage.email },
        success: function (data) {
            //console.log(data.result);		   
            var table = $('#default-datatable').DataTable({
                data: data.result,
                select: true,
                responsive: true,
                bLengthChange: false,
                pageLength: 50,
                scrollX: true,
                columns: [
                    { data: 'lid', title: 'LID', },
                    { data: 'lcode', title: 'REF. ID' },
                    {
                        data: 'time',
                        "sClass": "left",
                        "mRender": function (data, type, full) {
                            if (full.days > 0) {
                                var timeunit = "day";
                                if (full.days > 1) { timeunit = "days" };
                                return full.days + " " + timeunit;
                            } else if (full.days == 0 && full.hors > 0) {
                                var timeunit = "hour";
                                if (full.hors > 1) { timeunit = "hours" };
                                return full.hors + " " + timeunit;
                            } else if (full.hors == 0 && full.mins > 0) {
                                var timeunit = "min";
                                if (full.mins > 1) { timeunit = "mins" };
                                return full.mins + " " + timeunit;
                            } else {
                                var timeunit = "sec";
                                if (full.secs > 1) { timeunit = "secs" };
                                return full.secs + " secs";
                            }
                        },
                        title: "Age"
                    },
                    { data: 'lfrom', title: "PICK UP" },
                    { data: 'lto', title: "DROP OFF" },
                    { data: 'lfromdate', title: "DATE" },
                    { data: 'ltruck', title: "TRUCK TYPE" },
                    { data: null }
                ],
                "columnDefs": [{ "targets": -1, "data": null, "defaultContent": "<button class='btn btn-inverse-dark cursor-pointer book-details' style='width:90px;'>DETAILS</button>" }],
                "scrollX": true,
                "paging": true,
                "ordering": true,
                "responsive": true,
                "aaSorting": [[0, "desc"]],
                "pagingType": "full_numbers"
            });


            $('#default-datatable tbody').on('click', 'tr', function () {

                if ($(this).hasClass('selected')) {
                    $(this).removeClass('selected');
                }
                else {
                    table.$('tr.selected').removeClass('selected');
                    $(this).addClass('selected');
                }
            });

            table.column(0).visible(false);
            table.column(6).visible(false);
            //table.column( 0 ).data().join('<button>Click!</button>');


            $('#default-datatable tbody').on('click', 'button.book-details', function () {
                //var d = table.row(this).data();
                var c = table.row($(this).parents('tr')).data();
                //alert( 'You clicked on '+c.tid+'\'s row' );
                if (localStorage.email) {
                    //alert( 'You clicked on '+c.bID+'\'s row' ); 
                    Lobibox.window({
                        title: '    <span style="margin-left:10px;">JOB DETAILS</span>',
                        /*url: 'booking.html',*/
                        content: "<iframe id='ifm' class='ifm' src='book-details.html?l=" + c.lid + "'   scrolling='no' frameborder='0' style=\"background:url('assets/images/ajax-loader.gif') center center no-repeat; width:100%;\"></iframe>",
                        modal: true,
                        closeButton: true,
                        draggable: false,
                        showClass: 'fadeInRight',
                        hideClass: 'fadeOutRight',
                        beforeClose: function () {
                            //location.reload();
                        },
                        height: $(document).height(),
                        width: $(document).width()

                    });


                    //location.href = 'index.html?u='+c.bID;		  
                    //$("#modal-2").modal({backdrop: 'static', keyboard: false});  
                    //$('#modal-2').modal("show");

                }
            });



        }
    });
}
/*

*/
// search Loads
function searchloads() {
    var lfrom = document.getElementById("lfrom").value;
    var lfrom_city = document.getElementById("lfrom_city").value;
    var lfromdate = document.getElementById("start").value;
    var lto = document.getElementById("lto").value;
    var lto_city = document.getElementById("lto_city").value;
    var ltodate = document.getElementById("end").value;
    var truck = document.getElementById("truck").value;
    var lsize = document.getElementById("lsize").value;
    var llength = document.getElementById("llength").value;
    var lweight = document.getElementById("lweight").value;
    var ldist = document.getElementById("ldist").value;
    var lprice = document.getElementById("lprice").value;
    var op = document.getElementById("operation").value;
    var delay = 5000;

    $(".process_search").attr("disabled", "disabled");
    $(".msg").html('...processing <i class="fa fa-spinner fa-spin"></i>');
    var urla = "";
    if (op == "load") {
        urla = "https://redan.quantumcloud.ng/api/searchloads/";
    } else if (op == "truck") {
        urla = "https://redan.quantumcloud.ng/api/searchtrucks/";
    }

    $.ajax({
        url: urla,
        type: "GET",
        dataType: 'jsonp',
        timeout: 5000,
        data: { email: localStorage.email, lfrom: lfrom, lfrom_city: lfrom_city, lfromdate: lfromdate, lto: lto, lto_city: lto_city, ltodate: ltodate, truck: truck, lsize: lsize, llength: llength, lweight: lweight, ldist: ldist, lprice: lprice },
        success: function (data) {

            $(".process_search").removeAttr("disabled");
            var records = data.result;
            if (data.symbol < 1) {

                $(".msg").html('<div class ="alert alert-danger p-2 text-wrap"><i class="fa fa-spinner fa-spin"></i> ' + data.msg + '</div>');

            } else {

                $(".msg").html('<div class ="alert alert-success p-2 text-wrap"><i class="fa fa-spinner fa-spin"></i> ' + data.msg + '</div>');
                searchData(records);
                ////send CORS message


            }


        },
        error: function (request, status, err) {
            if (status == "timeout") {
                $(".process_search").removeAttr("disabled");
                $(".msg").html('<div class ="alert alert-danger p-2 text-wrap"><i class="fa fa-spinner fa-spin"></i> Your connection is slow!</div>');


            } else {
                $(".process_search").removeAttr("disabled");
                $(".msg").html('<div class ="alert alert-danger p-2 text-wrap"><i class="fa fa-spinner fa-spin"></i> Error connecting Server!</div>');

            }
        }

    });

    setTimeout(function () { $(".msg").html(''); }, delay);


}
/*

*/
/*

*/

// post load
function postload() {

    var lfrom = document.getElementById("lfrom").value;
    var lfrom_city = document.getElementById("lfrom_city").value;
    var lfrom_address = document.getElementById("lfrom_address").value;
    var lfromdate = document.getElementById("start").value;
    var lfromd = document.getElementById("lfromd").value;
    var lto = document.getElementById("lto").value;
    var lto_city = document.getElementById("lto_city").value;
    var lto_address = document.getElementById("lto_address").value;
    var ltodate = document.getElementById("end").value;
    var ltod = document.getElementById("ltod").value;
    var truck = $('#truck').val().join(',');
    var lsize = document.getElementById("lsize").value;
    var llength = document.getElementById("llength").value;
    var lweight = document.getElementById("lweight").value;
    var ldist = document.getElementById("ldist").value;
    var lprice = document.getElementById("lprice").value;
    var comment = document.getElementById("note").value;
    var delay = 5000;


    $(".result").html('<i class="fa fa-spinner fa-spin" style="font-size:24px"></i> ');

    $.ajax({
        url: "https://redan.quantumcloud.ng/api/postload/",
        type: "GET",
        dataType: 'jsonp',
        timeout: 50000,
        data: { email: localStorage.email, lfrom: lfrom, lfromd: lfromd, lfrom_city: lfrom_city, lfrom_address: lfrom_address, lfromdate: lfromdate, lto: lto, ltod: ltod, lto_city: lto_city, lto_address: lto_address, ltodate: ltodate, truck: truck, lsize: lsize, llength: llength, lweight: lweight, ldist: ldist, lprice: lprice, comment: comment },
        success: function (data) {
            //console.log(data.msg);

            if (data.symbol < 1) {

                $(".result").html('<div class ="alert alert-danger p-2 text-wrap"><i class="fa fa-spinner fa-spin"></i> ' + data.msg + '</div>');

            } else {
                $(".result").html('<div class ="alert alert-success p-2 text-wrap"><i class="fa fa-spinner fa-spin"></i> ' + data.msg + '</div>');
                $("#postload")[0].reset();

            }
        },
        error: function (request, status, err) {
            if (status == "timeout") {
                $(".result").html('<div class ="alert alert-danger p-2 text-wrap"><i class="fa fa-spinner fa-spin"></i> Your connection is slow!</div>');


            } else {
                // window.parent.closebut();
                //window.top.$("span.btn-close").click();
                //window.location.reload();      
                // another error occured 	
                $(".result").html('<div class ="alert alert-danger p-2 text-wrap"><i class="fa fa-spinner fa-spin"></i> Error connecting Server!</div>');

            }
        }

    });

    setTimeout(function () { $(".result").html(''); }, delay);
}
/*

*/
// add Staff
function addStaff() {

    var pid = localStorage.pid;
    var coycat = document.getElementById("coycat").value;
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var uemail = document.getElementById("email").value;
    var desig = document.getElementById("desig").value;
    var delay = 5000;

    $(".result").html('<i class="fa fa-spinner fa-spin" style="font-size:24px"></i> ');

    $.ajax({
        url: host + "/api/addstaff/",
        type: "GET",
        dataType: 'jsonp',
        timeout: 50000,
        data: { email: localStorage.email, pid: pid, coycat: coycat, name: name, phone: phone, uemail: uemail, desig: desig },
        success: function (data) {
            //console.log(data.msg);

            if (data.symbol < 1) {

                $(".result").html('<div class ="alert alert-danger p-2 text-wrap"><i class="fa fa-spinner fa-spin"></i> ' + data.msg + '</div>');


            } else {
                $(".result").html('<div class ="alert alert-success p-2 text-wrap"><i class="fa fa-spinner fa-spin"></i> ' + data.msg + '</div>');
                $("#formCoy")[0].reset();
                //window.top.$("span.ti-close").click();
                setTimeout(function () { /*location.href=src;*/  closeFrame(); }, delay);

            }
        },
        error: function (request, status, err) {
            if (status == "timeout") {
                $(".result").html('<div class ="alert alert-danger p-2 text-wrap"><i class="fa fa-spinner fa-spin"></i> Your connection is slow!</div>');


            } else {
                // window.parent.closebut();
                //window.top.$("span.btn-close").click();
                //window.location.reload();      
                // another error occured 	
                $(".result").html('<div class ="alert alert-danger p-2 text-wrap"><i class="fa fa-spinner fa-spin"></i> Error connecting Server!</div>');

            }
        }

    });

    setTimeout(function () { $(".result").html(''); }, delay);
}
/*

*/

//////load products
function loadprod(pid) {

    //$("#bookingHistory").html('<i class="fa fa-spinner fa-spin"></i>');
    $.ajax({
        url: host + "/api/loadprod/",
        type: "GET",
        dataType: 'jsonp',
        timeout: 50000,
        data: { email: localStorage.email, pid: pid },
        success: function (data) {
            //console.log(data.result);	
            // alert(data.cid);
            //document.getElementById("cid").value = data.cid;	   
            var table = $('#default-datatable').DataTable({
                data: data.result,
                select: true,
                dom: 'lrt',
                responsive: true,
                bLengthChange: false,
                pageLength: 50,
                scrollX: true,
                columns: [
                    { data: 'prodid', title: 'ID', },
                    { data: 'name', title: 'NAME' },
                    { data: 'cat', title: 'CATEGORY' },
                    { data: 'pq', title: 'PROD. QTY' },
                    { data: 'sq', title: 'SALES QTY' },
                    { data: 'punit', title: 'UNIT' },
                    { data: 'wholesale', title: 'WHOLESALE PRICE' },
                    { data: 'retail', title: 'RETAIL PRICE' },
                    { data: 'desn', title: 'DESCRIPTION' },
                    { data: 'labour', title: '% LABOUR' },
                    { data: 'material', title: '% MATERIAL' },
                    /*{ data: 'share',
    "sClass":"left share-width", 
    "mRender":function(data, type, full){
           
             return full.share + "%"; 
    	
    },
    title: "SHARE"
   },
                	
            */

                    { data: null }
                ],
                "columnDefs": [{ "targets": -1, "data": null, "defaultContent": "<button class='btn btn-primary cursor-pointer update-btn' style='width:90px;'>UPDATE</button> <button class='btn fa fa-trash cursor-pointer delete-btn' style='width:60px !important;'> </button>" }],
                "scrollX": true,
                "paging": true,
                "ordering": true,
                "responsive": true,
                "aaSorting": [[0, "desc"]],
                "pagingType": "full_numbers"
            });




            resizeFrame();
            table.column(0).visible(false);
            //table.column( 0 ).data().join('<button>Click!</button>');


            $('#default-datatable tbody').on('click', 'button.update-btn', function () {
                //var d = table.row(this).data();
                var c = table.row($(this).parents('tr')).data();
                //alert( 'You clicked on '+c.staffid+'\'s row' );
                //location.href = src+"?s="+c.staffid		  

                $("#modal-animation-1").modal({ backdrop: 'static', keyboard: false });
                document.getElementById('profileDetails').src = 'editproduct.html?prodid=' + c.prodid + "&t=" + Math.floor(Math.random() * 9000000) + 1000000;
                document.getElementById('profileDetails').height = "820px";
                document.getElementById("modal-title").innerHTML = "<i class='fa fa-cubes mr-2'></i><strong>EDIT PRODUCT</strong>";


            });

            $('#default-datatable tbody').on('click', 'button.delete-btn', function () {

                //var d = table.row(this).data();
                var c = table.row($(this).parents('tr')).data();

                var sname = c.name;



                var lobibox = Lobibox.notify('info', {
                    size: 'mini',
                    title: '<i class="fa fa-trash"></i> Confirm Delete',
                    position: 'left top',
                    closeOnClick: false,
                    delay: false,
                    icon: false,
                    messageHeight: 300,
                    msg: "Click to confirm delete! &nbsp;&nbsp;<br/><h6 style='color:#fff; margin-top: 20px;'>" + c.cat + ": " + sname + "</h6><br/><button class='btn btn-danger pl-4 p-3 pr-4 mt-n2' style='font-size:12px; width:100%;' onClick=\"javascript:deleteProduct('" + c.prodid + "','" + localStorage.pid + "');\">DELETE <i class='fa fa-trash'></i></button>"
                });
                resizeFrame();
                //$(window).scrollTop({top: 0, behavior: 'smooth'});	


                //$(".lobibox-window").animate({scrollTop:0}, "smooth");
                //window.scrollTo({ top: 0, behavior: 'smooth' });	
                //$('div.lobibox.lobibox-window').scrollTop({top: 0, behavior: 'smooth'});	


            });



        }
    });
}


/*

*/
////// add tangible asset
function addAssetsTbg() {

    var astype = document.getElementById("astype").value
    var asdesn = document.getElementById("asdesn").value
    var asprice = document.getElementById("asprice").value
    var asyear = document.getElementById("asyear").value
    var asspan = document.getElementById("asspan").value
    var delay = 5000;

    $(".result").html('<i class="fa fa-spinner fa-spin" style="font-size:24px"></i> ');

    $.ajax({
        url: host + "/api/addAssetsTbg/",
        type: "GET",
        dataType: 'jsonp',
        timeout: 50000,
        data: { email: localStorage.email, pid: localStorage.pid, astype: astype, asdesn: asdesn, asprice: asprice, asyear: asyear, asspan: asspan },
        success: function (data) {
            //console.log(data.msg);

            if (data.symbol < 1) {

                $(".result").html('<div class ="alert alert-danger p-2 text-wrap"><i class="fa fa-spinner fa-spin"></i> ' + data.msg + '</div>');


            } else {
                $(".result").html('<div class ="alert alert-success p-2 text-wrap"><i class="fa fa-spinner fa-spin"></i> ' + data.msg + '</div>');
                $("#asForm")[0].reset();
                //window.top.$("span.ti-close").click();
                setTimeout(function () { /*location.href=src;*/  closeFrame(); }, delay);

            }
        },
        error: function (request, status, err) {
            if (status == "timeout") {
                $(".result").html('<div class ="alert alert-danger p-2 text-wrap"><i class="fa fa-spinner fa-spin"></i> Your connection is slow!</div>');


            } else {

                $(".result").html('<div class ="alert alert-danger p-2 text-wrap"><i class="fa fa-spinner fa-spin"></i> Error connecting Server!</div>');

            }
        }

    });

    setTimeout(function () { $(".result").html(''); }, delay);
}
/*

*/
/////////// update tangible asset
function updateAssetTbg() {
    //alert("ok")
    var asid = document.getElementById("cid").value;
    var email = localStorage.email;
    var astype = document.getElementById("astype").value
    var asdesn = document.getElementById("asdesn").value
    var asprice = document.getElementById("asprice").value
    var asyear = document.getElementById("asyear").value
    var asspan = document.getElementById("asspan").value
    var delay = 6000;

    $(".msg").html('<i class="fa fa-spinner fa-spin" style="font-size:24px"></i> ');
    $.ajax({
        url: host + "/api/updateAssetTbg",
        type: "GET",
        dataType: 'jsonp',
        timeout: 5000,
        data: { email: email, asid: asid, astype: astype, asdesn: asdesn, asprice: asprice, asyear: asyear, asspan: asspan },
        success: function (data) {
            //console.log(data.msg);
            if (data.symbol > 0) {

                $(".msg").html("<span class='alert alert-success p-2'>" + data.msg + "</span>");

                setTimeout(function () { /*location.href=src;*/  closeFrame(); }, delay);

            } else {
                $(".msg").html("<span class='alert alert-danger p-2'>" + data.msg + "</span>");

            }

        },
        error: function (request, status, err) {
            if (status == "timeout") {
                $(".msg").html("<span class='alert alert-danger p-2'>Slow Network!</span>");

            } else {
                $(".msg").html("<span class='alert alert-danger p-2'>Error connecting Server!</span>");

            }
        }
    });
    setTimeout(function () { $(".msg").html(''); }, delay);
}
/*

*/
/////// get tangible asset
function getAssetTbg(p) {

    //var staffid = document.getElementById("staffid").value;
    var email = localStorage.email;
    var delay = 6000;

    $(".msg").html('<i class="fa fa-spinner fa-spin" style="font-size:24px"></i> ');
    $.ajax({
        url: host + "/api/getAssetTbg",
        type: "GET",
        dataType: 'jsonp',
        timeout: 50000,
        data: { email: email, asid: p },
        success: function (data) {
            //console.log(data.msg);
            if (data.symbol > 0) {

                $(".msg").html("");

                $("#astype").val(data.result[0].astype);
                $("#asdesn").val(data.result[0].asdesn);
                $("#asprice").val(data.result[0].asprice);
                $("#asyear").val(data.result[0].asyear);
                $("#asspan").val(data.result[0].asspan);

            } else {

                $(".msg").html("<span class='alert alert-danger p-2'>" + data.msg + "</span>");
            }

        },
        error: function (request, status, err) {
            if (status == "timeout") {
                $(".msg").html("<span class='alert alert-danger p-2'>Slow Network!</span>");

            } else {
                $(".msg").html("<span class='alert alert-danger p-2'>Error connecting Server!</span>");

            }
        }
    });
    setTimeout(function () { $(".msg").html(''); }, delay);
}
/*

*/
/*

*/
////// add intangible asset
function addAssetsIbg() {

    var astype = document.getElementById("astype").value
    var asdesn = document.getElementById("asdesn").value
    var asvalue = document.getElementById("asvalue").value
    var delay = 5000;

    $(".result").html('<i class="fa fa-spinner fa-spin" style="font-size:24px"></i> ');

    $.ajax({
        url: host + "/api/addAssetsIbg/",
        type: "GET",
        dataType: 'jsonp',
        timeout: 50000,
        data: { email: localStorage.email, pid: localStorage.pid, astype: astype, asdesn: asdesn, asvalue: asvalue },
        success: function (data) {
            //console.log(data.msg);

            if (data.symbol < 1) {

                $(".result").html('<div class ="alert alert-danger p-2 text-wrap"><i class="fa fa-spinner fa-spin"></i> ' + data.msg + '</div>');


            } else {
                $(".result").html('<div class ="alert alert-success p-2 text-wrap"><i class="fa fa-spinner fa-spin"></i> ' + data.msg + '</div>');
                $("#asForm")[0].reset();
                //window.top.$("span.ti-close").click();
                setTimeout(function () { /*location.href=src;*/  closeFrame(); }, delay);

            }
        },
        error: function (request, status, err) {
            if (status == "timeout") {
                $(".result").html('<div class ="alert alert-danger p-2 text-wrap"><i class="fa fa-spinner fa-spin"></i> Your connection is slow!</div>');


            } else {

                $(".result").html('<div class ="alert alert-danger p-2 text-wrap"><i class="fa fa-spinner fa-spin"></i> Error connecting Server!</div>');

            }
        }

    });

    setTimeout(function () { $(".result").html(''); }, delay);
}
/*

*/
/////////// update intangible asset
function updateAssetIbg() {
    //alert("ok")
    var asid = document.getElementById("cid").value;
    var email = localStorage.email;
    var astype = document.getElementById("astype").value
    var asdesn = document.getElementById("asdesn").value
    var asvalue = document.getElementById("asvalue").value
    var delay = 6000;

    $(".msg").html('<i class="fa fa-spinner fa-spin" style="font-size:24px"></i> ');
    $.ajax({
        url: host + "/api/updateAssetIbg",
        type: "GET",
        dataType: 'jsonp',
        timeout: 5000,
        data: { email: email, asid: asid, astype: astype, asdesn: asdesn, asvalue: asvalue },
        success: function (data) {
            //console.log(data.msg);
            if (data.symbol > 0) {

                $(".msg").html("<span class='alert alert-success p-2'>" + data.msg + "</span>");

                setTimeout(function () { /*location.href=src;*/  closeFrame(); }, delay);

            } else {
                $(".msg").html("<span class='alert alert-danger p-2'>" + data.msg + "</span>");

            }

        },
        error: function (request, status, err) {
            if (status == "timeout") {
                $(".msg").html("<span class='alert alert-danger p-2'>Slow Network!</span>");

            } else {
                $(".msg").html("<span class='alert alert-danger p-2'>Error connecting Server!</span>");

            }
        }
    });
    setTimeout(function () { $(".msg").html(''); }, delay);
}
/*

*/
/////// get intangible asset
function getAssetIbg(p) {

    //var staffid = document.getElementById("staffid").value;
    var email = localStorage.email;
    var delay = 6000;

    $(".msg").html('<i class="fa fa-spinner fa-spin" style="font-size:24px"></i> ');
    $.ajax({
        url: host + "/api/getAssetIbg",
        type: "GET",
        dataType: 'jsonp',
        timeout: 50000,
        data: { email: email, asid: p },
        success: function (data) {
            //console.log(data.msg);
            if (data.symbol > 0) {

                $(".msg").html("");

                $("#astype").val(data.result[0].astype);
                $("#asdesn").val(data.result[0].asdesn);
                $("#asvalue").val(data.result[0].asvalue);

            } else {

                $(".msg").html("<span class='alert alert-danger p-2'>" + data.msg + "</span>");
            }

        },
        error: function (request, status, err) {
            if (status == "timeout") {
                $(".msg").html("<span class='alert alert-danger p-2'>Slow Network!</span>");

            } else {
                $(".msg").html("<span class='alert alert-danger p-2'>Error connecting Server!</span>");

            }
        }
    });
    setTimeout(function () { $(".msg").html(''); }, delay);
}
/*

*/
////// add allocation
function addAllocation() {

    var altype = document.getElementById("altype").value;
    var aldesn = document.getElementById("aldesn").value;
    var alvalue = document.getElementById("alvalue").value;
    var delay = 5000;

    $(".result").html('<i class="fa fa-spinner fa-spin" style="font-size:24px"></i> ');

    $.ajax({
        url: host + "/api/addAllocation/",
        type: "GET",
        dataType: 'jsonp',
        timeout: 50000,
        data: { email: localStorage.email, pid: localStorage.pid, altype: altype, aldesn: aldesn, alvalue: alvalue },
        success: function (data) {
            //console.log(data.msg);

            if (data.symbol < 1) {

                $(".result").html('<div class ="alert alert-danger p-2 text-wrap"><i class="fa fa-spinner fa-spin"></i> ' + data.msg + '</div>');


            } else {
                $(".result").html('<div class ="alert alert-success p-2 text-wrap"><i class="fa fa-spinner fa-spin"></i> ' + data.msg + '</div>');
                $("#asForm")[0].reset();
                //window.top.$("span.ti-close").click();
                setTimeout(function () { /*location.href=src;*/  closeFrame(); }, delay);

            }
        },
        error: function (request, status, err) {
            if (status == "timeout") {
                $(".result").html('<div class ="alert alert-danger p-2 text-wrap"><i class="fa fa-spinner fa-spin"></i> Your connection is slow!</div>');


            } else {

                $(".result").html('<div class ="alert alert-danger p-2 text-wrap"><i class="fa fa-spinner fa-spin"></i> Error connecting Server!</div>');

            }
        }

    });

    setTimeout(function () { $(".result").html(''); }, delay);
}
/*

*/
/////////// update Allocation
function updateAllocation() {
    //alert("ok")
    var alid = document.getElementById("cid").value;
    var email = localStorage.email;
    var altype = document.getElementById("altype").value
    var aldesn = document.getElementById("aldesn").value
    var alvalue = document.getElementById("alvalue").value
    var delay = 6000;

    $(".msg").html('<i class="fa fa-spinner fa-spin" style="font-size:24px"></i> ');
    $.ajax({
        url: host + "/api/updateAllocation",
        type: "GET",
        dataType: 'jsonp',
        timeout: 5000,
        data: { email: email, pid: localStorage.pid, alid: alid, altype: altype, aldesn: aldesn, alvalue: alvalue },
        success: function (data) {
            //console.log(data.msg);
            if (data.symbol > 0) {

                $(".msg").html("<span class='alert alert-success p-2'>" + data.msg + "</span>");

                setTimeout(function () { /*location.href=src;*/  closeFrame(); }, delay);

            } else {
                $(".msg").html("<span class='alert alert-danger p-2'>" + data.msg + "</span>");

            }

        },
        error: function (request, status, err) {
            if (status == "timeout") {
                $(".msg").html("<span class='alert alert-danger p-2'>Slow Network!</span>");

            } else {
                $(".msg").html("<span class='alert alert-danger p-2'>Error connecting Server!</span>");

            }
        }
    });
    setTimeout(function () { $(".msg").html(''); }, delay);
}
/*

*/
/////// get Allocation
function getAllocation(p) {

    //var staffid = document.getElementById("staffid").value;
    var email = localStorage.email;
    var delay = 6000;

    $(".msg").html('<i class="fa fa-spinner fa-spin" style="font-size:24px"></i> ');
    $.ajax({
        url: host + "/api/getAllocation",
        type: "GET",
        dataType: 'jsonp',
        timeout: 50000,
        data: { email: email, alid: p },
        success: function (data) {
            //console.log(data.msg);
            if (data.symbol > 0) {

                $(".msg").html("");

                $("#altype").val(data.result[0].altype);
                $("#aldesn").val(data.result[0].aldesn);
                $("#alvalue").val(data.result[0].alvalue);

            } else {

                $(".msg").html("<span class='alert alert-danger p-2'>" + data.msg + "</span>");
            }

        },
        error: function (request, status, err) {
            if (status == "timeout") {
                $(".msg").html("<span class='alert alert-danger p-2'>Slow Network!</span>");

            } else {
                $(".msg").html("<span class='alert alert-danger p-2'>Error connecting Server!</span>");

            }
        }
    });
    setTimeout(function () { $(".msg").html(''); }, delay);
}
/*

*/
////// add Competitor
function addCompetitor() {

    var y_prod = document.getElementById("y_prod").value
    var c_prod = document.getElementById("c_prod").value
    var c_name = document.getElementById("c_name").value
    var y_price = document.getElementById("y_price").value
    var c_price = document.getElementById("c_price").value
    var c_region = document.getElementById("mloc").value
    var c_loc = document.getElementById("c_loc").value
    var c_diff = document.getElementById("c_diff").value
    var delay = 5000;

    $(".result").html('<i class="fa fa-spinner fa-spin" style="font-size:24px"></i> ');

    $.ajax({
        url: host + "/api/addCompetitor/",
        type: "GET",
        dataType: 'jsonp',
        timeout: 50000,
        data: { email: localStorage.email, pid: localStorage.pid, y_prod: y_prod, c_prod: c_prod, c_name: c_name, y_price: y_price, c_price: c_price, c_region: c_region, c_loc: c_loc, c_diff: c_diff },
        success: function (data) {
            //console.log(data.msg);

            if (data.symbol < 1) {

                $(".result").html('<div class ="alert alert-danger p-2 text-wrap"><i class="fa fa-spinner fa-spin"></i> ' + data.msg + '</div>');


            } else {
                $(".result").html('<div class ="alert alert-success p-2 text-wrap"><i class="fa fa-spinner fa-spin"></i> ' + data.msg + '</div>');
                $("#formCoy")[0].reset();
                //window.top.$("span.ti-close").click();
                setTimeout(function () { /*location.href=src;*/  closeFrame(); }, delay);

            }
        },
        error: function (request, status, err) {
            if (status == "timeout") {
                $(".result").html('<div class ="alert alert-danger p-2 text-wrap"><i class="fa fa-spinner fa-spin"></i> Your connection is slow!</div>');


            } else {
                // window.parent.closebut();
                //window.top.$("span.btn-close").click();
                //window.location.reload();      
                // another error occured 	
                $(".result").html('<div class ="alert alert-danger p-2 text-wrap"><i class="fa fa-spinner fa-spin"></i> Error connecting Server!</div>');

            }
        }

    });

    setTimeout(function () { $(".result").html(''); }, delay);
}
/*

*/
/////////// update competitor
function updateCompetitor() {
    //alert("ok")
    var cid = document.getElementById("cid").value;
    var email = localStorage.email;
    var y_prod = document.getElementById("y_prod").value
    var c_prod = document.getElementById("c_prod").value
    var c_name = document.getElementById("c_name").value
    var y_price = document.getElementById("y_price").value
    var c_price = document.getElementById("c_price").value
    var c_region = document.getElementById("mloc").value
    var c_loc = document.getElementById("c_loc").value
    var c_diff = document.getElementById("c_diff").value
    var delay = 6000;

    $(".msg").html('<i class="fa fa-spinner fa-spin" style="font-size:24px"></i> ');
    $.ajax({
        url: host + "/api/updateCompetitor",
        type: "GET",
        dataType: 'jsonp',
        timeout: 5000,
        data: { email: email, cid: cid, y_prod: y_prod, c_prod: c_prod, c_name: c_name, y_price: y_price, c_price: c_price, c_region: c_region, c_loc: c_loc, c_diff: c_diff },
        success: function (data) {
            //console.log(data.msg);
            if (data.symbol > 0) {

                $(".msg").html("<span class='alert alert-success p-2'>" + data.msg + "</span>");

            } else {
                $(".msg").html("<span class='alert alert-danger p-2'>" + data.msg + "</span>");

            }

        },
        error: function (request, status, err) {
            if (status == "timeout") {
                $(".msg").html("<span class='alert alert-danger p-2'>Slow Network!</span>");

            } else {
                $(".msg").html("<span class='alert alert-danger p-2'>Error connecting Server!</span>");

            }
        }
    });
    setTimeout(function () { $(".msg").html(''); }, delay);
}
/*

*/
/////// get Competitor
function getCompetitor(p) {

    //var staffid = document.getElementById("staffid").value;
    var email = localStorage.email;
    var delay = 6000;

    $(".msg").html('<i class="fa fa-spinner fa-spin" style="font-size:24px"></i> ');
    $.ajax({
        url: host + "/api/getCompetitor",
        type: "GET",
        dataType: 'jsonp',
        timeout: 50000,
        data: { email: email, comid: p },
        success: function (data) {
            //console.log(data.msg);
            if (data.symbol > 0) {

                $(".msg").html("");

                $("#y_prod").val(data.result[0].y_prod);
                $("#c_prod").val(data.result[0].c_prod);
                $("#c_name").val(data.result[0].c_name);
                $("#y_price").val(data.result[0].y_price);
                $("#c_price").val(data.result[0].c_price);
                if (data.result[0].c_region) {
                    var regions = data.result[0].c_region.split(',');
                    $('#loc').val(regions).trigger('change');
                }
                $("#c_loc").val(data.result[0].c_loc);
                $("#c_diff").val(data.result[0].c_diff);

            } else {

                $(".msg").html("<span class='alert alert-danger p-2'>" + data.msg + "</span>");
            }

        },
        error: function (request, status, err) {
            if (status == "timeout") {
                $(".msg").html("<span class='alert alert-danger p-2'>Slow Network!</span>");

            } else {
                $(".msg").html("<span class='alert alert-danger p-2'>Error connecting Server!</span>");

            }
        }
    });
    setTimeout(function () { $(".msg").html(''); }, delay);
}
/*

*/
/////// get Operations
function getOperation(p) {

    //var staffid = document.getElementById("staffid").value;
    var email = localStorage.email;
    var delay = 6000;

    $(".msg").html('<i class="fa fa-spinner fa-spin" style="font-size:24px"></i> ');
    $.ajax({
        url: host + "/api/getOperation",
        type: "GET",
        dataType: 'jsonp',
        timeout: 50000,
        data: { email: email, opid: p },
        success: function (data) {
            //console.log(data.msg);
            if (data.symbol > 0) {

                $(".msg").html("");

                $("#optype").val(data.result[0].optype);
                $("#opcost").val(data.result[0].opcost);
                $("#opgrowth").val(data.result[0].opgrowth);

            } else {

                $(".msg").html("<span class='alert alert-danger p-2'>" + data.msg + "</span>");
            }

        },
        error: function (request, status, err) {
            if (status == "timeout") {
                $(".msg").html("<span class='alert alert-danger p-2'>Slow Network!</span>");

            } else {
                $(".msg").html("<span class='alert alert-danger p-2'>Error connecting Server!</span>");

            }
        }
    });
    setTimeout(function () { $(".msg").html(''); }, delay);
}
/*

*/
// add Operations
function addOperations() {


    var optype = document.getElementById("optype").value;
    var opcost = document.getElementById("opcost").value;
    var opgrowth = document.getElementById("opgrowth").value;
    var delay = 5000;

    $(".result").html('<i class="fa fa-spinner fa-spin" style="font-size:24px"></i> ');

    $.ajax({
        url: host + "/api/addOperations/",
        type: "GET",
        dataType: 'jsonp',
        timeout: 50000,
        data: { email: localStorage.email, pid: localStorage.pid, optype: optype, opcost: opcost, opgrowth: opgrowth },
        success: function (data) {
            //console.log(data.msg);

            if (data.symbol < 1) {

                $(".result").html('<div class ="alert alert-danger p-2 text-wrap"><i class="fa fa-spinner fa-spin"></i> ' + data.msg + '</div>');


            } else {
                $(".result").html('<div class ="alert alert-success p-2 text-wrap"><i class="fa fa-spinner fa-spin"></i> ' + data.msg + '</div>');
                $("#opForm")[0].reset();
                //window.top.$("span.ti-close").click();
                setTimeout(function () { /*location.href=src;*/  closeFrame(); }, delay);

            }
        },
        error: function (request, status, err) {
            if (status == "timeout") {
                $(".result").html('<div class ="alert alert-danger p-2 text-wrap"><i class="fa fa-spinner fa-spin"></i> Your connection is slow!</div>');


            } else {
                // window.parent.closebut();
                //window.top.$("span.btn-close").click();
                //window.location.reload();      
                // another error occured 	
                $(".result").html('<div class ="alert alert-danger p-2 text-wrap"><i class="fa fa-spinner fa-spin"></i> Error connecting Server!</div>');

            }
        }

    });

    setTimeout(function () { $(".result").html(''); }, delay);
}
/*

*/
////edit Operations
function editOperation() {

    var opid = document.getElementById("cid").value;
    var optype = document.getElementById("optype").value;
    var opcost = document.getElementById("opcost").value;
    var opgrowth = document.getElementById("opgrowth").value;
    var email = localStorage.email;
    var delay = 4000;

    $(".msg").html('<i class="fa fa-spinner fa-spin" style="font-size:24px"></i> ');
    $.ajax({
        url: host + "/api/updateOperation",
        type: "GET",
        dataType: 'jsonp',
        timeout: 5000,
        data: { email: localStorage.email, opid: opid, optype: optype, opcost: opcost, opgrowth: opgrowth },
        success: function (data) {
            //console.log(data.msg);
            if (data.symbol > 0) {
                $(".msg").html("<span class='alert alert-success p-2'>" + data.msg + "</span>");
                //$("#opForm")[0].reset();
                //window.top.$("span.ti-close").click();
                setTimeout(function () { /*location.href=src;*/  closeFrame(); }, delay);

            } else {
                $(".msg").html("<span class='alert alert-danger p-2'>" + data.msg + "</span>");


            }

        },
        error: function (request, status, err) {
            if (status == "timeout") {
                $(".msg").html("<span class='alert alert-danger p-2'>Slow Network!</span>");

            } else {
                $(".msg").html("<span class='alert alert-danger p-2'>Error connecting Server!</span>");

            }
        }
    });
    setTimeout(function () { $(".msg").html(''); }, delay);
}
/*

*/
// add Product
function addProduct() {


    var name = document.getElementById("name").value;
    var cat = document.getElementById("cat").value;
    var pq = document.getElementById("pq").value;
    var sq = document.getElementById("sq").value;
    var punit = document.getElementById("punit").value;
    var wholesale = document.getElementById("wholesale").value;
    var retail = document.getElementById("retail").value;
    var desn = document.getElementById("desn").value;
    var labour = document.getElementById("labour").value;
    var material = document.getElementById("material").value;
    var delay = 5000;

    $(".result").html('<i class="fa fa-spinner fa-spin" style="font-size:24px"></i> ');

    $.ajax({
        url: host + "/api/addproduct/",
        type: "GET",
        dataType: 'jsonp',
        timeout: 50000,
        data: { email: localStorage.email, pid: localStorage.pid, name: name, cat: cat, pq: pq, sq: sq, punit: punit, wholesale: wholesale, retail: retail, desn: desn, labour: labour, material: material },
        success: function (data) {
            //console.log(data.msg);

            if (data.symbol < 1) {

                $(".result").html('<div class ="alert alert-danger p-2 text-wrap"><i class="fa fa-spinner fa-spin"></i> ' + data.msg + '</div>');


            } else {
                $(".result").html('<div class ="alert alert-success p-2 text-wrap"><i class="fa fa-spinner fa-spin"></i> ' + data.msg + '</div>');
                $("#formCoy")[0].reset();
                //window.top.$("span.ti-close").click();
                setTimeout(function () { /*location.href=src;*/  closeFrame(); }, delay);

            }
        },
        error: function (request, status, err) {
            if (status == "timeout") {
                $(".result").html('<div class ="alert alert-danger p-2 text-wrap"><i class="fa fa-spinner fa-spin"></i> Your connection is slow!</div>');


            } else {
                // window.parent.closebut();
                //window.top.$("span.btn-close").click();
                //window.location.reload();      
                // another error occured 	
                $(".result").html('<div class ="alert alert-danger p-2 text-wrap"><i class="fa fa-spinner fa-spin"></i> Error connecting Server!</div>');

            }
        }

    });

    setTimeout(function () { $(".result").html(''); }, delay);
}
/*

*/
/////// get Product
function getProduct(p) {

    //var staffid = document.getElementById("staffid").value;
    var email = localStorage.email;
    var delay = 6000;

    $(".msg").html('<i class="fa fa-spinner fa-spin" style="font-size:24px"></i> ');
    $.ajax({
        url: host + "/api/getProduct",
        type: "GET",
        dataType: 'jsonp',
        timeout: 50000,
        data: { email: email, prodid: p },
        success: function (data) {
            //console.log(data.msg);
            if (data.symbol > 0) {

                $(".msg").html("");
                $("#name").val(data.result[0].name);
                $("#cat").val(data.result[0].cat);
                $("#pq").val(data.result[0].pq);
                $("#sq").val(data.result[0].sq);
                $("#punit").val(data.result[0].punit);
                $("#wholesale").val(data.result[0].wholesale);
                $("#retail").val(data.result[0].retail);
                $("#desn").val(data.result[0].desn);
                $("#labour").val(data.result[0].labour);
                $("#material").val(data.result[0].material);

            } else {

                $(".msg").html("<span class='alert alert-danger p-2'>" + data.msg + "</span>");
            }

        },
        error: function (request, status, err) {
            if (status == "timeout") {
                $(".msg").html("<span class='alert alert-danger p-2'>Slow Network!</span>");

            } else {
                $(".msg").html("<span class='alert alert-danger p-2'>Error connecting Server!</span>");

            }
        }
    });
    setTimeout(function () { $(".msg").html(''); }, delay);
}
/*

*/
/////////// update product
function updateProduct() {

    var prodid = document.getElementById("prodid").value;
    var name = document.getElementById("name").value;
    var cat = document.getElementById("cat").value;
    var pq = document.getElementById("pq").value;
    var sq = document.getElementById("sq").value;
    var punit = document.getElementById("punit").value;
    var wholesale = document.getElementById("wholesale").value;
    var retail = document.getElementById("retail").value;
    var desn = document.getElementById("desn").value;
    var labour = document.getElementById("labour").value;
    var material = document.getElementById("material").value;
    var email = localStorage.email;
    var delay = 4000;

    $(".msg").html('<i class="fa fa-spinner fa-spin" style="font-size:24px"></i> ');
    $.ajax({
        url: host + "/api/updateProduct",
        type: "GET",
        dataType: 'jsonp',
        timeout: 5000,
        data: { email: localStorage.email, prodid: prodid, name: name, cat: cat, pq: pq, sq: sq, punit: punit, wholesale: wholesale, retail: retail, desn: desn, labour: labour, material: material },
        success: function (data) {
            //console.log(data.msg);
            if (data.symbol > 0) {
                $(".msg").html("<span class='alert alert-success p-2'>" + data.msg + "</span>");
                $("#formCoy")[0].reset();
                //window.top.$("span.ti-close").click();
                setTimeout(function () { /*location.href=src;*/  closeFrame(); }, delay);

            } else {
                $(".msg").html("<span class='alert alert-danger p-2'>" + data.msg + "</span>");


            }

        },
        error: function (request, status, err) {
            if (status == "timeout") {
                $(".msg").html("<span class='alert alert-danger p-2'>Slow Network!</span>");

            } else {
                $(".msg").html("<span class='alert alert-danger p-2'>Error connecting Server!</span>");

            }
        }
    });
    setTimeout(function () { $(".msg").html(''); }, delay);
}
/*

*/
////// delete product
function deleteProduct(p, q) {

    $.ajax({
        url: host + "/api/deleteProduct",
        type: "GET",
        dataType: 'jsonp',
        timeout: 5000,
        data: { email: localStorage.email, pid: p },
        success: function (data) {

            $('.lobibox-close').click();
            //getForm(b);
            ///getFields(fn);   /clear instead and redraw
            var table = $('#default-datatable').DataTable();
            table.clear().draw();

            ////////
            $.ajax({
                url: host + "/api/loadprod/",
                type: "GET",
                dataType: 'jsonp',
                timeout: 5000,
                data: { email: localStorage.email, pid: q },
                success: function (data) {
                    console.log(data.result);
                    table.rows.add(data.result).draw(false);

                }
            });

            //////// 

            Lobibox.notify('default', {
                size: 'mini',
                position: 'center top',
                msg: data.msg
            });


        },
        error: function (request, status, err) {
            if (status == "timeout") {

                Lobibox.notify('default', {
                    size: 'mini',
                    position: 'center top',
                    msg: 'Slow Network!'
                });

            } else {

                Lobibox.notify('default', {
                    size: 'mini',
                    position: 'center top',
                    msg: 'Error connecting Server!'
                });
            }
        }
    });
}
/*

*/
/*

*/
// add Owner
function addOwner() {

    ;
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var uemail = document.getElementById("email").value;
    var share = document.getElementById("share").value;
    var delay = 5000;

    $(".result").html('<i class="fa fa-spinner fa-spin" style="font-size:24px"></i> ');

    $.ajax({
        url: host + "/api/addowner/",
        type: "GET",
        dataType: 'jsonp',
        timeout: 50000,
        data: { email: localStorage.email, pid: localStorage.pid, uemail: uemail, coycat: 'BOD', name: name, phone: phone, share: share },
        success: function (data) {
            //console.log(data.msg);

            if (data.symbol < 1) {

                $(".result").html('<div class ="alert alert-danger p-2 text-wrap"><i class="fa fa-spinner fa-spin"></i> ' + data.msg + '</div>');


            } else {
                $(".result").html('<div class ="alert alert-success p-2 text-wrap"><i class="fa fa-spinner fa-spin"></i> ' + data.msg + '</div>');
                $("#formCoy")[0].reset();
                //window.top.$("span.ti-close").click();
                setTimeout(function () { /*location.href=src;*/  closeFrame(); }, delay);

            }
        },
        error: function (request, status, err) {
            if (status == "timeout") {
                $(".result").html('<div class ="alert alert-danger p-2 text-wrap"><i class="fa fa-spinner fa-spin"></i> Your connection is slow!</div>');


            } else {
                // window.parent.closebut();
                //window.top.$("span.btn-close").click();
                //window.location.reload();      
                // another error occured 	
                $(".result").html('<div class ="alert alert-danger p-2 text-wrap"><i class="fa fa-spinner fa-spin"></i> Error connecting Server!</div>');

            }
        }

    });

    setTimeout(function () { $(".result").html(''); }, delay);
}
/*

*/
/////// get Owner
function getOwner(s) {

    //var staffid = document.getElementById("staffid").value;
    var email = localStorage.email;
    var delay = 6000;

    $(".msg").html('<i class="fa fa-spinner fa-spin" style="font-size:24px"></i> ');
    $.ajax({
        url: host + "/api/getOwner",
        type: "GET",
        dataType: 'jsonp',
        timeout: 50000,
        data: { email: email, staffid: s },
        success: function (data) {
            //console.log(data.msg);
            if (data.symbol > 0) {

                $(".msg").html("");
                $("#name").val(data.result[0].name);
                $("#share").val(data.result[0].share);
                $("#phone").val(data.result[0].phone);
                $("#email").val(data.result[0].email);

            } else {

                $(".msg").html("<span class='alert alert-danger p-2'>" + data.msg + "</span>");
            }

        },
        error: function (request, status, err) {
            if (status == "timeout") {
                $(".msg").html("<span class='alert alert-danger p-2'>Slow Network!</span>");

            } else {
                $(".msg").html("<span class='alert alert-danger p-2'>Error connecting Server!</span>");

            }
        }
    });
    setTimeout(function () { $(".msg").html(''); }, delay);
}
/*

*/
/////////// update staff
function updateOwner() {

    var staffid = document.getElementById("sid").value;
    var name = document.getElementById("name").value;
    var share = document.getElementById("share").value;
    var coycat = document.getElementById("coycat").value;
    var phone = document.getElementById("phone").value;
    var uemail = document.getElementById("email").value;
    var email = localStorage.email;
    var delay = 4000;

    $(".msg").html('<i class="fa fa-spinner fa-spin" style="font-size:24px"></i> ');
    $.ajax({
        url: host + "/api/updateOwner",
        type: "GET",
        dataType: 'jsonp',
        timeout: 5000,
        data: { email: email, staffid: staffid, name: name, share: share, coycat: coycat, phone: phone, uemail: uemail, pid: localStorage.pid },
        success: function (data) {
            //console.log(data.msg);
            if (data.symbol > 0) {
                $(".msg").html("<span class='alert alert-success p-2'>" + data.msg + "</span>");
                $("#formCoy")[0].reset();
                //window.top.$("span.ti-close").click();
                setTimeout(function () { /*location.href=src;*/  closeFrame(); }, delay);

            } else {
                $(".msg").html("<span class='alert alert-danger p-2'>" + data.msg + "</span>");


            }

        },
        error: function (request, status, err) {
            if (status == "timeout") {
                $(".msg").html("<span class='alert alert-danger p-2'>Slow Network!</span>");

            } else {
                $(".msg").html("<span class='alert alert-danger p-2'>Error connecting Server!</span>");

            }
        }
    });
    setTimeout(function () { $(".msg").html(''); }, delay);
}
/*

*/
// add Project
function addProject() {

    var cid = document.getElementById("cid").value;
    var name = document.getElementById("name").value;
    var loc = document.getElementById("loc").value;
    var status = document.getElementById("status").value;
    var start = document.getElementById("start").value;
    var end = document.getElementById("end").value;
    var level = document.getElementById("level").value;
    var cost = document.getElementById("cost").value;
    var desn = document.getElementById("note").value;
    var delay = 5000;
    cost = parseFloat(cost.replace(/,/g, ''));
    var src = "settingsPrj.html";

    $(".result").html('<i class="fa fa-spinner fa-spin" style="font-size:24px"></i> ');

    $.ajax({
        url: "https://redan.quantumcloud.ng/api/addProject/",
        type: "GET",
        dataType: 'jsonp',
        timeout: 50000,
        data: { email: localStorage.email, cid: cid, name: name, loc: loc, status: status, start: start, end: end, level: level, cost: cost, desn: desn },
        success: function (data) {
            //console.log(data.msg);

            if (data.symbol < 1) {

                $(".result").html('<div class ="alert alert-danger p-2 text-wrap"><i class="fa fa-spinner fa-spin"></i> ' + data.msg + '</div>');


            } else {
                $(".result").html('<div class ="alert alert-success p-2 text-wrap"><i class="fa fa-spinner fa-spin"></i> ' + data.msg + '</div>');
                $("#formCoy")[0].reset();
                setTimeout(function () { location.href = src; }, delay);

            }
        },
        error: function (request, status, err) {
            if (status == "timeout") {
                $(".result").html('<div class ="alert alert-danger p-2 text-wrap"><i class="fa fa-spinner fa-spin"></i> Your connection is slow!</div>');


            } else {
                // window.parent.closebut();
                //window.top.$("span.btn-close").click();
                //window.location.reload();      
                // another error occured 	
                $(".result").html('<div class ="alert alert-danger p-2 text-wrap"><i class="fa fa-spinner fa-spin"></i> Error connecting Server!</div>');

            }
        }

    });

    setTimeout(function () { $(".result").html(''); }, delay);
}
/*

*/
/*

*/
// post mover
function postmover() {

    var mfrom = document.getElementById("mfrom").value;
    var mfromd = document.getElementById("mfromd").value;
    var mfrom_city = document.getElementById("mfrom_city").value;
    var mfrom_address = document.getElementById("mfrom_address").value;
    var mfromdate = document.getElementById("start").value;
    var mtodate = document.getElementById("end").value;
    var mtype = document.getElementById("mtype").value;
    var mpersons = document.getElementById("mpersons").value;
    var mprice = document.getElementById("mprice").value;
    var comment = document.getElementById("note").value;
    var delay = 5000;


    $(".result").html('<i class="fa fa-spinner fa-spin" style="font-size:24px"></i> ');

    $.ajax({
        url: "https://redan.quantumcloud.ng/api/postmover/",
        type: "GET",
        dataType: 'jsonp',
        timeout: 50000,
        data: { email: localStorage.email, mfrom: mfrom, mfromd: mfromd, mfrom_city: mfrom_city, mfrom_address: mfrom_address, mfromdate: mfromdate, mtodate: mtodate, mtype: mtype, mpersons: mpersons, mprice: mprice, comment: comment },
        success: function (data) {
            //console.log(data.msg);

            if (data.symbol < 1) {

                $(".result").html('<div class ="alert alert-danger p-2 text-wrap"><i class="fa fa-spinner fa-spin"></i> ' + data.msg + '</div>');

            } else {
                $(".result").html('<div class ="alert alert-success p-2 text-wrap"><i class="fa fa-spinner fa-spin"></i> ' + data.msg + '</div>');
                $("#postmover")[0].reset();

            }
        },
        error: function (request, status, err) {
            if (status == "timeout") {
                $(".result").html('<div class ="alert alert-danger p-2 text-wrap"><i class="fa fa-spinner fa-spin"></i> Your connection is slow!</div>');


            } else {
                // window.parent.closebut();
                //window.top.$("span.btn-close").click();
                //window.location.reload();      
                // another error occured 	
                $(".result").html('<div class ="alert alert-danger p-2 text-wrap"><i class="fa fa-spinner fa-spin"></i> Error connecting Server!</div>');

            }
        }

    });

    setTimeout(function () { $(".result").html(''); }, delay);
}
/*

*/

// edit load
function editload() {

    var lid = document.getElementById("lid").value;
    var lfrom = document.getElementById("lfrom").value;
    var lfromd = document.getElementById("lfromd").value;
    var lfrom_city = document.getElementById("lfrom_city").value;
    var lfrom_address = document.getElementById("lfrom_address").value;
    var lfromdate = document.getElementById("start").value;
    var lto = document.getElementById("lto").value;
    var ltod = document.getElementById("ltod").value;
    var lto_city = document.getElementById("lto_city").value;
    var lto_address = document.getElementById("lto_address").value;
    var ltodate = document.getElementById("end").value;
    var truck = $('#truck').val().join(',');
    var lsize = document.getElementById("lsize").value;
    var llength = document.getElementById("llength").value;
    var lweight = document.getElementById("lweight").value;
    var ldist = document.getElementById("ldist").value;
    var lprice = document.getElementById("lprice").value;
    var comment = document.getElementById("note").value;
    var delay = 5000;


    $(".result").html('<i class="fa fa-spinner fa-spin" style="font-size:24px"></i> ');

    $.ajax({
        url: "https://redan.quantumcloud.ng/api/editload/",
        type: "GET",
        dataType: 'jsonp',
        timeout: 50000,
        data: { email: localStorage.email, lfrom: lfrom, lfromd: lfromd, lfrom_city: lfrom_city, lfrom_address: lfrom_address, lfromdate: lfromdate, lto: lto, ltod: ltod, lto_city: lto_city, lto_address: lto_address, ltodate: ltodate, truck: truck, lsize: lsize, llength: llength, lweight: lweight, ldist: ldist, lprice: lprice, comment: comment, lid: lid },
        success: function (data) {
            //console.log(data.msg);

            if (data.symbol < 1) {

                $(".result").html('<div class ="alert alert-danger p-2 text-wrap"><i class="fa fa-spinner fa-spin"></i> ' + data.msg + '</div>');

            } else {
                $(".result").html('<div class ="alert alert-success p-2 text-wrap"><i class="fa fa-spinner fa-spin"></i> ' + data.msg + '</div>');
                //$("#postload")[0].reset();

            }
        },
        error: function (request, status, err) {
            if (status == "timeout") {
                $(".result").html('<div class ="alert alert-danger p-2 text-wrap"><i class="fa fa-spinner fa-spin"></i> Your connection is slow!</div>');


            } else {
                // window.parent.closebut();
                //window.top.$("span.btn-close").click();
                //window.location.reload();      
                // another error occured 	
                $(".result").html('<div class ="alert alert-danger p-2 text-wrap"><i class="fa fa-spinner fa-spin"></i> Error connecting Server!</div>');

            }
        }

    });

    setTimeout(function () { $(".result").html(''); }, delay);
}
/*

*/
// edit truck
function edittruck() {

    var tid = document.getElementById("tid").value;
    var tfrom = document.getElementById("tfrom").value;
    var tfromd = document.getElementById("tfromd").value;
    var tfrom_city = document.getElementById("tfrom_city").value;
    var tfrom_address = document.getElementById("tfrom_address").value;
    var tfromdate = document.getElementById("start").value;
    var tto = document.getElementById("tto").value;
    var ttod = document.getElementById("ttod").value;
    var tto_city = document.getElementById("tto_city").value;
    var tto_address = document.getElementById("tto_address").value;
    var ttodate = document.getElementById("end").value;
    var truck = document.getElementById("truck").value;
    var tsize = document.getElementById("tsize").value;
    var tlength = document.getElementById("tlength").value;
    var tweight = document.getElementById("tweight").value;
    var tdist = document.getElementById("tdist").value;
    var tprice = document.getElementById("tprice").value;
    var comment = document.getElementById("note").value;
    var delay = 5000;


    $(".result").html('<i class="fa fa-spinner fa-spin" style="font-size:24px"></i> ');

    $.ajax({
        url: "https://redan.quantumcloud.ng/api/edittruck/",
        type: "GET",
        dataType: 'jsonp',
        timeout: 50000,
        data: { email: localStorage.email, tfrom: tfrom, tfromd: tfromd, tfrom_city: tfrom_city, tfrom_address: tfrom_address, tfromdate: tfromdate, tto: tto, ttod: ttod, tto_city: tto_city, tto_address: tto_address, ttodate: ttodate, truck: truck, tsize: tsize, tlength: tlength, tweight: tweight, tdist: tdist, tprice: tprice, comment: comment, tid: tid },
        success: function (data) {
            //console.log(data.msg);

            if (data.symbol < 1) {

                $(".result").html('<div class ="alert alert-danger p-2 text-wrap"><i class="fa fa-spinner fa-spin"></i> ' + data.msg + '</div>');

            } else {
                $(".result").html('<div class ="alert alert-success p-2 text-wrap"><i class="fa fa-spinner fa-spin"></i> ' + data.msg + '</div>');
                //$("#postload")[0].reset();

            }
        },
        error: function (request, status, err) {
            if (status == "timeout") {
                $(".result").html('<div class ="alert alert-danger p-2 text-wrap"><i class="fa fa-spinner fa-spin"></i> Your connection is slow!</div>');


            } else {
                // window.parent.closebut();
                //window.top.$("span.btn-close").click();
                //window.location.reload();      
                // another error occured 	
                $(".result").html('<div class ="alert alert-danger p-2 text-wrap"><i class="fa fa-spinner fa-spin"></i> Error connecting Server!</div>');

            }
        }

    });

    setTimeout(function () { $(".result").html(''); }, delay);
}
/*

*/
// edit mover
function editmover() {

    var moid = document.getElementById("moid").value;
    var mfrom = document.getElementById("mfrom").value;
    var mfromd = document.getElementById("mfromd").value;
    var mfrom_city = document.getElementById("mfrom_city").value;
    var mfrom_address = document.getElementById("mfrom_address").value;
    var mfromdate = document.getElementById("start").value;
    var mtodate = document.getElementById("end").value;
    var mtype = document.getElementById("mtype").value;
    var mpersons = document.getElementById("mpersons").value;
    var mprice = document.getElementById("mprice").value;
    var comment = document.getElementById("note").value;
    var delay = 5000;


    $(".result").html('<i class="fa fa-spinner fa-spin" style="font-size:24px"></i> ');

    $.ajax({
        url: "https://redan.quantumcloud.ng/api/editmover/",
        type: "GET",
        dataType: 'jsonp',
        timeout: 50000,
        data: { email: localStorage.email, mfrom: mfrom, mfromd: mfromd, mfrom_city: mfrom_city, mfrom_address: mfrom_address, mfromdate: mfromdate, mtodate: mtodate, mtype: mtype, mprice: mprice, mpersons: mpersons, comment: comment, moid: moid },
        success: function (data) {
            //console.log(data.msg);

            if (data.symbol < 1) {

                $(".result").html('<div class ="alert alert-danger p-2 text-wrap"><i class="fa fa-spinner fa-spin"></i> ' + data.msg + '</div>');

            } else {
                $(".result").html('<div class ="alert alert-success p-2 text-wrap"><i class="fa fa-spinner fa-spin"></i> ' + data.msg + '</div>');
                //$("#postload")[0].reset();

            }
        },
        error: function (request, status, err) {
            if (status == "timeout") {
                $(".result").html('<div class ="alert alert-danger p-2 text-wrap"><i class="fa fa-spinner fa-spin"></i> Your connection is slow!</div>');


            } else {
                // window.parent.closebut();
                //window.top.$("span.btn-close").click();
                //window.location.reload();      
                // another error occured 	
                $(".result").html('<div class ="alert alert-danger p-2 text-wrap"><i class="fa fa-spinner fa-spin"></i> Error connecting Server!</div>');

            }
        }

    });

    setTimeout(function () { $(".result").html(''); }, delay);
}
/*

*/

// LoadBoard Loads
function loadboardLoads() {

    //$("#bookingHistory").html('<i class="fa fa-spinner fa-spin"></i>');
    $.ajax({
        url: "https://redan.quantumcloud.ng/api/loadboardLoads/",
        type: "GET",
        dataType: 'jsonp',
        timeout: 50000,
        data: { email: localStorage.email },
        success: function (data) {
            //console.log(data.result);		   
            var table = $('#default-datatable').DataTable({
                data: data.result,
                select: true,
                bLengthChange: false,
                responsive: true,
                pageLength: 50,
                scrollX: true,
                columns: [
                    { data: 'lid', title: 'LID', },
                    { data: 'lcode', title: 'REF. ID' },
                    { data: 'lfrom', title: "PICK UP" },
                    { data: 'lto', title: "DROP OFF" },
                    { data: 'lfromdate', title: "DATE" },
                    {
                        data: 'bidstate',
                        "sClass": "left",
                        "mRender": function (data, type, full) {
                            if (full.bidstate == 0) {
                                return "<button class='btn btn-inverse-dark  bid-details text-success'><i class='fa fa-gavel'></i> BIDS</button>";
                            } else {
                                return "<button class='btn btn-inverse-dark  text-white'><i class='fa fa-gavel'></i> BIDS</button>";
                            }
                        },
                        title: "Status"
                    },
                    { data: null }
                ],
                "columnDefs": [{ "targets": -1, "data": null, "defaultContent": "<button class='btn btn-inverse-dark load-details cursor-pointer' style='width:90px;'>DETAILS</button>" }],
                "scrollX": true,
                "paging": true,
                "ordering": true,
                "responsive": true,
                "aaSorting": [[0, "desc"]],
                "pagingType": "full_numbers"
            });


            /*setInterval( function () {
            table.ajax.reload();
            }, 30000 );*/

            $('#type-filter')
                .on('change', function (event) {
                    var search_ids = '';
                    $('#type-filter :selected').each(function (i_item, selected) {
                        search_ids += $(selected).val();
                    });
                    //alert(search_ids);
                    //search_ids = search_ids.replace(/\|$/g, '');
                    table
                        .column(table.column(2))
                        .search(search_ids, true, false)
                        .draw();
                });

            $('#default-datatable tbody').on('click', 'tr', function () {

                if ($(this).hasClass('selected')) {
                    $(this).removeClass('selected');
                }
                else {
                    table.$('tr.selected').removeClass('selected');
                    $(this).addClass('selected');
                }
            });

            table.column(0).visible(false);
            //table.column( 0 ).data().join('<button>Click!</button>');


            $('#default-datatable tbody').on('click', 'button.load-details', function () {
                //var d = table.row(this).data();
                var c = table.row($(this).parents('tr')).data();
                //alert( 'You clicked on '+c.tid+'\'s row' );
                if (localStorage.email) {
                    //alert( 'You clicked on '+c.bID+'\'s row' ); 
                    Lobibox.window({
                        title: '    <span style="margin-left:10px;">LOAD DETAILS</span>',
                        /*url: 'booking.html',*/
                        content: "<iframe id='ifm' class='ifm' name='ifm' src='load-details2.html?l=" + c.lid + "'  scrolling='no' frameborder='0' style=\"background:url('assets/images/ajax-loader.gif') center center no-repeat; width:100%;\"></iframe>",
                        modal: true,
                        closeButton: true,
                        draggable: false,
                        showClass: 'fadeInRight',
                        hideClass: 'fadeOutRight',
                        beforeClose: function () {
                            //location.reload();
                        },
                        height: $(document).height(),
                        width: $(document).width()

                    });


                    //location.href = 'index.html?u='+c.bID;		  
                    //$("#modal-2").modal({backdrop: 'static', keyboard: false});  
                    //$('#modal-2').modal("show");

                }
            });

            $('#default-datatable tbody').on('click', 'button.bid-details', function () {
                //var d = table.row(this).data();
                var c = table.row($(this).parents('tr')).data();
                //alert( 'You clicked on '+c.tid+'\'s row' );
                if (localStorage.email) {
                    //alert( 'You clicked on '+c.bID+'\'s row' ); 
                    Lobibox.window({
                        title: '    <span style="margin-left:10px;">BID DETAILS</span>',
                        /*url: 'booking.html',*/
                        content: "<iframe id='ifm' class='ifm' name='ifm' src='bid-details.html?l=" + c.lid + "' scrolling='no' frameborder='0' style=\"background:url('assets/images/ajax-loader.gif') center center no-repeat; width:100%;\"></iframe>",
                        modal: true,
                        closeButton: true,
                        draggable: false,
                        showClass: 'fadeInRight',
                        hideClass: 'fadeOutRight',
                        beforeClose: function () {
                            //location.reload();
                        },
                        height: $(document).height(),
                        width: $(document).width()

                    });


                    //location.href = 'index.html?u='+c.bID;		  
                    //$("#modal-2").modal({backdrop: 'static', keyboard: false});  
                    //$('#modal-2').modal("show");

                }
            });



        }
    });
}

/*

*/
/*

*/

// LoadBoard Trucks
function loadboardTrucks() {

    //$("#bookingHistory").html('<i class="fa fa-spinner fa-spin"></i>');
    $.ajax({
        url: "https://redan.quantumcloud.ng/api/loadboardTrucks/",
        type: "GET",
        dataType: 'jsonp',
        timeout: 50000,
        data: { email: localStorage.email },
        success: function (data) {
            //console.log(data.result);		   
            var table = $('#second-datatable').DataTable({
                data: data.result,
                select: true,
                bLengthChange: false,
                responsive: true,
                pageLength: 50,
                scrollX: true,
                columns: [
                    { data: 'tid', title: 'TID', },
                    { data: 'tcode', title: 'REF. ID' },
                    { data: 'tfrom', title: "ORIGIN" },
                    { data: 'tto', title: "DESTINATION" },
                    { data: 'tfromdate', title: "AVAIL. DATE" },
                    { data: 'ttruck', title: "TRUCK TYPE" },
                    { data: null }
                ],
                "columnDefs": [{ "targets": -1, "data": null, "defaultContent": "<button class='btn btn-inverse-dark cursor-pointer' style='width:90px;'>DETAILS</button>" }],
                "scrollX": true,
                "paging": true,
                "ordering": true,
                "responsive": true,
                "aaSorting": [[0, "desc"]],
                "pagingType": "full_numbers"
            });


            /*setInterval( function () {
            table.ajax.reload();
            }, 30000 );*/

            $('#type-filter')
                .on('change', function (event) {
                    var search_ids = '';
                    $('#type-filter :selected').each(function (i_item, selected) {
                        search_ids += $(selected).val();
                    });
                    //alert(search_ids);
                    //search_ids = search_ids.replace(/\|$/g, '');
                    table
                        .column(table.column(2))
                        .search(search_ids, true, false)
                        .draw();
                });

            $('#second-datatable tbody').on('click', 'tr', function () {

                if ($(this).hasClass('selected')) {
                    $(this).removeClass('selected');
                }
                else {
                    table.$('tr.selected').removeClass('selected');
                    $(this).addClass('selected');
                }
            });

            table.column(0).visible(false);
            //table.column( 0 ).data().join('<button>Click!</button>');


            $('#second-datatable tbody').on('click', 'button', function () {
                //var d = table.row(this).data();
                var c = table.row($(this).parents('tr')).data();
                //alert( 'You clicked on '+c.tid+'\'s row' );
                if (localStorage.email) {
                    //alert( 'You clicked on '+c.tid+'\'s row' ); 
                    Lobibox.window({
                        title: '    <span style="margin-left:10px;">TRUCK DETAILS</span>',
                        /*url: 'booking.html',*/
                        content: "<iframe id='ifm' class='ifm' name='ifm' src='truck-details2.html?t=" + c.tid + "'  scrolling='no' frameborder='0' style=\"background:url('assets/images/ajax-loader.gif') center center no-repeat; width:100%;\"></iframe>",
                        modal: true,
                        closeButton: true,
                        draggable: false,
                        showClass: 'fadeInRight',
                        hideClass: 'fadeOutRight',
                        beforeClose: function () {
                            //location.reload();
                        },
                        height: $(document).height(),
                        width: $(document).width()

                    });


                    //location.href = 'index.html?u='+c.bID;		  
                    //$("#modal-2").modal({backdrop: 'static', keyboard: false});  
                    //$('#modal-2').modal("show");

                }
            });



        }
    });
}

/*

*/
// LoadBoard Movers
function loadboardMovers() {

    //$("#bookingHistory").html('<i class="fa fa-spinner fa-spin"></i>');
    $.ajax({
        url: "https://redan.quantumcloud.ng/api/loadboardMovers/",
        type: "GET",
        dataType: 'jsonp',
        timeout: 50000,
        data: { email: localStorage.email },
        success: function (data) {
            //console.log(data.result);		   
            var table = $('#third-datatable').DataTable({
                data: data.result,
                select: true,
                bLengthChange: false,
                responsive: true,
                pageLength: 50,
                scrollX: true,
                columns: [
                    { data: 'moid', title: 'TID', },
                    { data: 'mcode', title: 'REF. ID' },
                    { data: 'mfrom', title: "LOCATION" },
                    { data: 'mtype', title: "CATEGORY" },
                    { data: 'mfromdate', title: "AVAIL. DATE" },
                    { data: null }
                ],
                "columnDefs": [{ "targets": -1, "data": null, "defaultContent": "<button class='btn btn-inverse-dark cursor-pointer' style='width:90px;'>DETAILS</button>" }],
                "scrollX": true,
                "paging": true,
                "ordering": true,
                "responsive": true,
                "aaSorting": [[0, "desc"]],
                "pagingType": "full_numbers"
            });


            /*setInterval( function () {
            table.ajax.reload();
            }, 30000 );*/

            $('#type-filter')
                .on('change', function (event) {
                    var search_ids = '';
                    $('#type-filter :selected').each(function (i_item, selected) {
                        search_ids += $(selected).val();
                    });
                    //alert(search_ids);
                    //search_ids = search_ids.replace(/\|$/g, '');
                    table
                        .column(table.column(2))
                        .search(search_ids, true, false)
                        .draw();
                });

            $('#third-datatable tbody').on('click', 'tr', function () {

                if ($(this).hasClass('selected')) {
                    $(this).removeClass('selected');
                }
                else {
                    table.$('tr.selected').removeClass('selected');
                    $(this).addClass('selected');
                }
            });

            table.column(0).visible(false);
            //table.column( 0 ).data().join('<button>Click!</button>');


            $('#third-datatable tbody').on('click', 'button', function () {
                //var d = table.row(this).data();
                var c = table.row($(this).parents('tr')).data();
                //alert( 'You clicked on '+c.tid+'\'s row' );
                if (localStorage.email) {
                    //alert( 'You clicked on '+c.tid+'\'s row' ); 
                    Lobibox.window({
                        title: '    <span style="margin-left:10px;">MOVER DETAILS</span>',
                        /*url: 'booking.html',*/
                        content: "<iframe id='ifm' class='ifm' name='ifm' src='mover-details2.html?m=" + c.moid + "'  scrolling='no' frameborder='0' style=\"background:url('assets/images/ajax-loader.gif') center center no-repeat; width:100%;\"></iframe>",
                        modal: true,
                        closeButton: true,
                        draggable: false,
                        showClass: 'fadeInRight',
                        hideClass: 'fadeOutRight',
                        beforeClose: function () {
                            //location.reload();
                        },
                        height: $(document).height(),
                        width: $(document).width()

                    });


                    //location.href = 'index.html?u='+c.bID;		  
                    //$("#modal-2").modal({backdrop: 'static', keyboard: false});  
                    //$('#modal-2').modal("show");

                }
            });



        }
    });
}

/*

*/
/*

*/

function bookingHistory2() {

    //$("#bookingHistory").html('<i class="fa fa-spinner fa-spin"></i>');
    $.ajax({
        url: "https://api.restscene.com/bookings2",
        type: "GET",
        dataType: 'jsonp',
        timeout: 50000,
        data: { email: localStorage.email },
        success: function (data) {
            //console.log(data.result);		   
            var table = $('#second-datatable').DataTable({
                data: data.result,
                columns: [
                    { data: 'bID', title: 'ID', },
                    { data: 'tid', title: 'TX ID' },
                    { data: 'r_name', title: "NAME" },
                    { data: 'amt', title: "AMOUNT", className: "float-right" },
                    { data: 'status', title: "STATUS" },
                    { data: 'created', title: "DATE" },
                    { data: null }
                ],
                "columnDefs": [{ "targets": -1, "data": null, "defaultContent": "<button class='btn btn-primary cursor-pointer' style='width:90px;'>PROCESS</button>" }],
                "scrollX": true,
                "paging": true,
                "ordering": true,
                "responsive": true,
                "aaSorting": [[0, "desc"]],
                "pagingType": "full_numbers"
            });


            table.column(0).visible(false);
            //table.column( 0 ).data().join('<button>Click!</button>');


            $('#second-datatable tbody').on('click', 'button', function () {
                //var d = table.row(this).data();
                var c = table.row($(this).parents('tr')).data();
                //alert( 'You clicked on '+c.tid+'\'s row' );
                if (localStorage.email) {
                    //alert( 'You clicked on '+c.bID+'\'s row' ); 
                    Lobibox.window({
                        title: '<i class="fa fa-hotel ml-3 mb-3"></i> CUST. BOOKING DETAILS',
                        /*url: 'booking.html',*/
                        content: "<iframe id=\"profileDetails\" class=\"profileDetails\" src='bookingdetails.html?b=" + c.bID + "' height=\"480px\"  scrolling=\"no\" frameborder=\"0\" style=\"background:url('assets/images/ajax-loader.gif') center center no-repeat; width:100%;\"></iframe>",
                        modal: true,
                        showClass: 'flipInX',
                        height: 480

                    });
                    //location.href = 'index.html?u='+c.bID;		  
                    //$("#modal-2").modal({backdrop: 'static', keyboard: false});  
                    //$('#modal-2').modal("show");

                }
            });



        }
    });
}

/*

*/

//======================================//
//== Added Today 26/03/2020 by NnaDid ==//
//=====================================//
// walletBalance
function walletBal() {
    $(".walletBalance").html('<i class="fa fa-spinner fa-spin"></i>');
    $.ajax({
        url: "https://api.restscene.com/wallet",
        type: "GET",
        dataType: 'jsonp',
        timeout: 50000,
        data: { email: localStorage.email },
        success: function (data) {
            console.log(data);
            if (data.error == 0) {
                $(".walletBalance").html(data.bal);
            } else {
                $(".walletBalance").html(data.error);
            }
        }
    });
}
/*

*/



$(document).ready(function () {



    var $_GET = $_GET(),
        ip = "",
        checkURL = ['dashboard.html', 'posts.html', 'profile.html', 'settings.html', 'polls.html', 'elections.html', 'support.html'];
    url1 = "index.html",
        url2 = "login.html",
        u = $_GET['u'];


    if (u && u !== "") {
        localStorage.ushare = u;
        //alert(localStorage.ushare);		  
    }

    //check if browser supports localStorage
    function hasS() {
        try {
            return 'localStorage' in window && window['localStorage'] !== null;
        } catch (e) {
            return false;
        }
    }

    function $_GET(param) {
        var vars = {};
        window.location.href.replace(location.hash, '').replace(
            /[?&]+([^=&]+)=?([^&]*)?/gi, // regexp
            function (m, key, value) { // callback
                vars[key] = value !== undefined ? value : '';
            }
        );

        if (param) {
            return vars[param] ? vars[param] : null;
        }
        return vars;
    }



    if (localStorage.email && localStorage.esess && localStorage.ename) {


        var ename = localStorage.ename,
            email = localStorage.email,
            esess = localStorage.esess;
        eimgs = localStorage.eimgs;


    } else if (window.location.href.indexOf(url1) > 0) {
        function disableBack() { window.history.forward() }
        window.onload = disableBack();
        window.onpageshow = function (evt) { if (evt.persisted) disableBack() }

        if (hasS === false) {
            var delay = 0;
            setTimeout(function () { location.href = url2; }, delay);
            Lobibox.notify('default', {
                size: 'mini',
                position: 'center top',
                msg: "Incompatible browser!"
            });
        }





    } else {

        for (var i = 0; i < checkURL.length; i++) {
            if (window.location.href.indexOf(checkURL[i]) > -1) {
                var delay = 0;
                setTimeout(function () { window.top.location.href = url2; }, delay);
                Lobibox.notify('default', {
                    size: 'mini',
                    position: 'center top',
                    msg: "User not found!"
                });
            }
        }

    }



    if (ename) {
        initProfile(ename, email, esess, eimgs);
    }

    //logo link
    $("img.logo-link").on('click', function () {
        window.location = "index.html";
    });

    //call states
    $("select#u_country").on('change', function () {
        callStates();
    });


});













