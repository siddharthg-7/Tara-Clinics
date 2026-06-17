import { useEffect, type RefObject } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * 1. Navbar: Hide on scroll down, Reveal on scroll up
 */
export const useNavbarScroll = (navRef: RefObject<HTMLElement>) => {
  useEffect(() => {
    if (!navRef.current) return;

    const ctx = gsap.context(() => {
      const showAnim = gsap.from(navRef.current, { 
        yPercent: -100,
        paused: true,
        duration: 0.3,
        ease: "power2.out"
      }).progress(1);

      ScrollTrigger.create({
        start: "top top",
        end: "max",
        onUpdate: (self) => {
          if (self.direction === -1) {
            showAnim.play(); // Scrolling UP
          } else {
            showAnim.reverse(); // Scrolling DOWN
          }
        }
      });
    }, navRef);

    return () => ctx.revert(); // Cleanup pattern
  }, [navRef]);
};

/**
 * 2. Hero: Timeline Reveal
 */
export const useHeroTimeline = (containerRef: RefObject<HTMLElement>) => {
  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero-badge", { y: 20, opacity: 0, duration: 0.6 })
        .from(".hero-title", { y: 30, opacity: 0, duration: 0.8 }, "-=0.4")
        .from(".hero-text", { y: 20, opacity: 0, duration: 0.8 }, "-=0.6")
        .from(".hero-buttons", { y: 20, opacity: 0, duration: 0.6 }, "-=0.6")
        .from(".hero-image", { scale: 0.95, opacity: 0, duration: 1 }, "-=0.4");
    }, containerRef);

    return () => ctx.revert();
  }, [containerRef]);
};

/**
 * 3. Stats: Count Up Animation
 */
export const useStatsCountUp = (containerRef: RefObject<HTMLElement>) => {
  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const counters = gsap.utils.toArray<HTMLElement>('.stat-number');
      
      counters.forEach((counter) => {
        const target = parseFloat(counter.getAttribute('data-target') || '0');
        
        gsap.to(counter, {
          scrollTrigger: {
            trigger: counter,
            start: "top 85%", // Triggers when the element is 85% down the viewport
            once: true
          },
          innerHTML: target,
          duration: 2,
          snap: { innerHTML: 1 }, // Snaps to whole numbers during animation
          ease: "power1.inOut"
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, [containerRef]);
};

/**
 * 4. Gallery: Stagger Reveal
 */
export const useGalleryStagger = (containerRef: RefObject<HTMLElement>) => {
  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".gallery-item", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15, // 150ms delay between each item
        ease: "power2.out"
      });
    }, containerRef);

    return () => ctx.revert();
  }, [containerRef]);
};

/**
 * 5. Patient Journey: ScrollTrigger Timeline
 */
export const usePatientJourney = (containerRef: RefObject<HTMLElement>, lineRef: RefObject<HTMLElement>) => {
  useEffect(() => {
    if (!containerRef.current || !lineRef.current) return;

    const ctx = gsap.context(() => {
      // Animate the connecting line drawing itself
      gsap.fromTo(lineRef.current, 
        { width: "0%" },
        {
          width: "100%",
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top center", 
            end: "bottom center",
            scrub: 1, // Smooth scrub effect tied to scroll velocity
          }
        }
      );

      // Stagger the individual step circles
      gsap.from(".journey-step", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center+=100",
        },
        scale: 0,
        opacity: 0,
        duration: 0.6,
        stagger: 0.2,
        ease: "back.out(1.7)"
      });
    }, containerRef);

    return () => ctx.revert();
  }, [containerRef, lineRef]);
};
