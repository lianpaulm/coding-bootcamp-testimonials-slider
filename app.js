const testimonials = [
  {
    id: 1,
    name: 'Tanya Sinclair',
    job: 'UX Engineer',
    img: './images/image-tanya.jpg',
    text: `“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”`,
  },
  {
    id: 2,
    name: 'John Tarkpor',
    job: 'Junior Front-end Developer',
    img: './images/image-john.jpg',
    text: `“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”`,
  },
];

const reviewSlider = () => {
  // current item for index
  let currentItem = 0;

  // referencing testimonials item
  const img = document.querySelector('#author-img');
  const text = document.querySelector('#text');
  const name = document.querySelector('#name');
  const job = document.querySelector('#job');

  // slider buttons
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');

  // show person function
  function showPerson(index) {
    let item = testimonials[index];
    img.src = item.img;
    text.textContent = item.text;
    name.textContent = item.name;
    job.textContent = item.job;
  }

  nextBtn.addEventListener('click', () => {
    currentItem++;
    if (currentItem > testimonials.length - 1) {
      currentItem = 0;
    }
    showPerson(currentItem);
  });
  prevBtn.addEventListener('click', () => {
    currentItem--;
    if (currentItem < 0) {
      currentItem = testimonials.length - 1;
    }
    showPerson(currentItem);
  });
};

reviewSlider();
