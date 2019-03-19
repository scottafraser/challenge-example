const $ = window.$;
const listGroup = $(".list-group");

let orderedList = [];
let list = [
  { name: "hawthorne-developer-evaluation.com", votes: 1 },
  { name: "funky-cold-medina.com", votes: 4 },
  { name: "timbers-rock.com", votes: 0 },
  { name: "man-bear-pig.com", votes: 6 },
  { name: "random-ecommerce-website.com", votes: 6 },
  { name: "another-one.inc", votes: 10 },
  { name: "best-website-ever.inc", votes: 10 },
  { name: "another-one.inc", votes: 10 },
  { name: "another-one.inc", votes: 10 },
  { name: "another-one.inc", votes: 10 }
];

// this sorts by votes
sortList = () => {
  orderedList = list.sort((a, b) => parseFloat(b.votes - parseFloat(a.votes)));
};

// rerenders new list on vote
makeList = () => {
  listGroup.empty();
  sortList();
  orderedList.forEach(item => {
    listGroup.append(`
    <li
    class="list-group-item d-flex justify-content-between align-items-center"
  >
    <span class="label">
      <h5><span class="badge badge-primary badge-pill">${item.votes}</span>
      ${item.name}</h5>
      </span>
    </span>
    <span>
      <button
        onclick="{handleUpVote(event)}"
        type="button"
        class="btn btn-primary"
      >
        +
      </button>
      <button
        onclick="{handleDownVote(event)}"
        type="button"
        class="btn btn-primary"
      >
        -
      </button>
    </span>
   </li>
    `);
  });
};

handleUpVote = e => {
  const text = e.target.closest("li").innerText;
  list.forEach(item => {
    if (text.includes(item.name)) {
      item.votes++;
    }
  });
  makeList();
};

handleDownVote = e => {
  const text = e.target.closest("li").innerText;
  list.forEach(item => {
    if (text.includes(item.name)) {
      item.votes--;
    }
  });
  makeList();
};

$(document).ready(() => {
  makeList();
});
