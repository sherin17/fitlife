let currentIndex = 0;

        function showSlide(index) {
            const sliderWrapper = document.querySelector('.slider-wrapper');
            const slides = document.querySelectorAll('.slide');
            const totalSlides = slides.length;

            if (index < 0) {
                currentIndex = totalSlides - 1;
            } else if (index >= totalSlides) {
                currentIndex = 0;
            } else {
                currentIndex = index;
            }

            const translateValue = -currentIndex * 100 + '%';
            sliderWrapper.style.transform = 'translateX(' + translateValue + ')';
        }

        function nextSlide() {
            showSlide(currentIndex + 1);
        }

        function prevSlide() {
            showSlide(currentIndex - 1);
        }

         // Equipment details array
         const equipmentData = [
            {
                name: "Threadmill",
                price: "$800",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
                longDescription: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in leo leo. Donecaliquet mauris ac consequat ornare. Pellentesque eget leo tempor, venenatis maurissed, viverra ante. Donec tincidunt mauris vel tincidunt ultricies. Sed sed liberohendrerit elit gravida vulputate.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in leo leo. Donecaliquet mauris ac consequat ornare. Pellentesque eget leo tempor, venenatis maurissed, viverra ante. Donec tincidunt mauris vel tincidunt ultricies. Sed sed liberohendrerit elit gravida vulputate.",
                reviews: [
                    { name: "John Doe", rating: 4, comment: "Lorem ipsum dolor sit amet..." }, { name: "Jane Smith", rating: 5, comment: "Lorem ipsum dolor sit amet..." },
                    // Add more reviews as needed
                ],
            },
            // Add details for other equipment items
        ];

        // Function to update equipment details based on index
        function updateEquipmentDetails(index) {
            const equipment = equipmentData[index];
            document.getElementById("equipmentName").innerText = equipment.name;
            document.getElementById("equipmentPrice").innerText = equipment.price;
            document.getElementById("equipmentDescription").innerText = equipment.description;
            document.getElementById("equipmentLongDescription").innerText = equipment.longDescription;

            const reviewsContainer = document.getElementById("equipmentReviewsContainer");
            reviewsContainer.innerHTML = ""; // Clear existing reviews

            // Add reviews dynamically
            equipment.reviews.forEach((review) => {
                const reviewElement = document.createElement("div");
                reviewElement.innerHTML = `
                    <div class="review">
                        <h3>${review.name}</h3>
                        <p>${review.comment}</p>
                        <div class="rating">
                            ${'*'.repeat(review.rating)}${'&#9734;'.repeat(5 - review.rating)}
                        </div>
                    </div>
                `;
                reviewsContainer.appendChild(reviewElement);
            });
        }

        // Example: Load details for the first equipment item
        updateEquipmentDetails(0);