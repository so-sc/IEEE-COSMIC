import React from "react";
import Link from "next/link";

const Submission = () => {
  return (
    <div>
      <h1 className="font-bold text-2xl my-3">Paper Submission Details</h1>

      {/* Instructions for authors */}
      <div>
        <h1 className="text-[#018100] pb-2 text-sm font-bold">
          Instructions for authors:
        </h1>
        <ol className="list-decimal px-5 text-sm">
          <li className="py-1">
            Kindly note that 2024 COSMIC will follow a
            &quote;double-blind&quote; review process. All submitted papers will
            be judged based on their quality, presentation and relevance through
            a &quote;double-blind&quote; review process, where the identities of
            the authors are withheld from the reviewers. Therefore, the authors
            are required to preserve the anonymity of submission, while at the
            same time allowing the reader to fully gain the context of related
            past work, including their own. Papers that do not conform with
            &quote;double-blind submission&quote; policies will be rejected
            without review (
            <span className="text-red-600 font-semibold tracking-wide">
              Very Important!
            </span>
            ). Please read the guidelines (given below) to preserve anonymity
            with double-blind submission.
          </li>
          <li className="py-1">
            Since the &apos;Accepted and presented papers&apos; of 2024 COSMIC
            will be submitted for possible publication in the IEEE Xplore®
            Digital Library (Conference Approval Pending), the manuscript must
            strictly adhere to the standard IEEE two column format and must not
            be more than 6 pages.
          </li>
          <li className="py-1">
            Typesetting instructions and sample templates:
            <Link
              href="https://www.ieee.org/conferences/publishing/templates.html"
              target="_blank"
              className="px-1 text-sm tracking-wide text-blue-600 font-semibold hover:underline underline-offset-4"
            >
              IEEE Manuscript Templates for Conference Proceedings
            </Link>
          </li>
          <li className="py-1 mb-3">
            The Camera Ready Copy (CRC) of every &apos;accepted&apos; paper will
            be subjected to the &apos;similarity check&apos; using IEEE
            CrossCheck and Prohibited Authors List (PAL). The CRC that fails
            these checks would be rejected.
          </li>
        </ol>
      </div>

      {/* Guidelines to preserve anonymity */}
      <div>
        <h1 className="text-[#018100] pb-2 text-sm font-bold">
          Guidelines to preserve anonymity for &apos;double-blind&apos;
          submissions:
        </h1>
        <ol className="list-decimal px-5 text-sm">
          <li className="py-1">
            Remove the names and affiliations of authors from the title page of
            the PDF file that you submit for review. This information must be
            included in the final camera ready copy if your paper gets accepted.
            While submitting your paper for review, you need to include all the
            author details only at the registration page. The PDF file of the
            paper should not have the author information.
          </li>
          <li className="py-1">
            Remove acknowledgments of identifying names and funding sources from
            the PDF file that you will submit for review. This information must
            be included in the final camera ready copy if your paper gets
            accepted.
          </li>
          <li className="py-1">
            Remove project titles or names that can be used to trace back to the
            authors via a web search engine.
          </li>
          <li className="py-1">
            Name your files carefully. The source file names (e.g.,
            &apos;Rajesh.dvi&apos;) are often embedded in the final output as
            accessible comments.
          </li>
          <li className="py-1">
            Use care in referring to your previous works as related works. Do
            not omit references to provide anonymity, as this leaves the
            reviewer unable to grasp the context. Instead, you can reference
            your past work in the third person format, just like any other piece
            of related work by another author. For example, instead of
            &apos;Recently, we have proposed a new protocol [9] ...,&apos;
            sentences in the spirit of “Recently, the authors in [9] have
            proposed a new protocol ... may be used
          </li>
          <li className="py-1 mb-3">
            Papers with the same title and abstract should not be posted on a
            public website, such as arxiv.org, or shared via public mailing
            lists or communicated to other conferences/journals/publications.
          </li>
        </ol>
      </div>

      {/* Important IEEE policy */}
      <div>
        <h1 className="text-[#018100] pb-2 text-sm font-bold">
          Important IEEE policy:
        </h1>
        <ol className="list-decimal px-5 text-sm">
          <li className="py-1">
            IEEE reserves the right to exclude a paper from distribution after
            the conference (including its removal from IEEE Xplore) if the paper
            is not presented at the conference.
          </li>
          <li className="py-1">
            Papers are reviewed on the basis that they do not contain
            plagiarized material and have not been submitted to any other
            conference at the same time (double submission). These matters are
            taken very seriously and the IEEE will take action against any
            author who engages in either practice. Kindly follow these links for
            more details:{" "}
            <Link
              href="https://www.ieee.org/publications/rights/plagiarism/plagiarism.html"
              target="_blank"
              className="px-1 text-sm tracking-wide text-blue-600 font-semibold hover:underline underline-offset-4"
            >
              IEEE Policy on Plagiarism
            </Link>{" "}
            and{" "}
            <Link
              href="https://www.ieee.org/publications/rights/multi-sub-guidelines-intro.html"
              target="_blank"
              className="px-1 text-sm tracking-wide text-blue-600 font-semibold hover:underline underline-offset-4"
            >
              IEEE Policy on Double Submission
            </Link>
            .
          </li>
          <li className="py-1 mb-3">
            Submitted papers must be unpublished and not currently under review
            for any other publication. The authors of accepted papers will need
            to sign an IEEE Copyright form and present their paper at the
            conference.
          </li>
        </ol>
      </div>

      {/* Paper submission link */}
      <div>
        <h1 className="text-[#018100] pb-2 text-sm font-bold">
          Paper submission link:
        </h1>
        <ol className="list-decimal px-5 text-sm">
          <li className="py-1">
            Kindly submit the paper through the following link:
          </li>
          <Link
            href="https://cmt3.research.microsoft.com/IEEECOSMIC2024"
            target="_blank"
            className="px-1 text-sm tracking-wide text-blue-600 font-semibold hover:underline underline-offset-4"
          >
            https://cmt3.research.microsoft.com/IEEECOSMIC2024
          </Link>
          <li className="py-1 mb-3">
            Paper submission via email is not permitted. The papers submitted
            via email will be rejected without review.
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Submission;
