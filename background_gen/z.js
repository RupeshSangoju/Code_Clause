const color1 = document.getElementById('color1');
const color2 = document.getElementById('color2');
const type = document.getElementById('type');
const angle = document.getElementById('angle');
const angleContainer = document.getElementById('angle-container');
const preview = document.getElementById('preview');
const title = document.getElementById('title');
const label1 = document.getElementById('label1');
const label2 = document.getElementById('label2');

function updatePreview() {
  const gradientType = type.value;
  let gradient;

  if (gradientType === 'linear' || gradientType === 'repeating-linear') {
    gradient = `${gradientType}-gradient(${angle.value}deg, ${color1.value}, ${color2.value})`;
    angleContainer.style.display = 'block';
  } else if (gradientType === 'radial' || gradientType === 'repeating-radial') {
    gradient = `${gradientType}-gradient(circle, ${color1.value}, ${color2.value})`;
    angleContainer.style.display = 'none';
  } else if (gradientType === 'ellipse' || gradientType === 'repeating-ellipse') {
    gradient = `${gradientType}-gradient(ellipse, ${color1.value}, ${color2.value})`;
    angleContainer.style.display = 'none';
  } else if (gradientType === 'circle') {
    gradient = `radial-gradient(circle, ${color1.value}, ${color2.value})`;
    angleContainer.style.display = 'none';
  } else if (gradientType === 'conic' || gradientType === 'repeating-conic') {
    gradient = `${gradientType}-gradient(from 0deg, ${color1.value}, ${color2.value})`;
    angleContainer.style.display = 'none';
  } else {
    gradient = `${gradientType}-gradient(${color1.value}, ${color2.value})`;
    angleContainer.style.display = 'none';
  }

  preview.style.background = gradient;
  title.style.background = gradient;
  label1.style.background = gradient;
  label2.style.background = gradient;
}

color1.addEventListener('input', updatePreview);
color2.addEventListener('input', updatePreview);
type.addEventListener('change', updatePreview);
angle.addEventListener('input', updatePreview);

updatePreview();  // Initial preview update
  