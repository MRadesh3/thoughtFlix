import Link from "next/link";

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className="w-full max-w-full flex-col flex-start">
      <h1 className="head_text text_left">
        <span className="blue_gradient">{type} Post</span>
      </h1>
      <p className="desc text-left max-w-md">
        Welcome to the ThoughtFlix {type} Post page, where you have the power to
        refine and amplify your thoughts with ease. Craft your messages with
        precision and add that personal touch to your quotes. Our user-friendly
        interface is designed to provide you with a seamless editing experience,
        ensuring that your words resonate just the way you envision
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-10 flex flex-col gap-7 max-w-2xl w-full glassmorphism"
      >
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Your Thought
          </span>
          <textarea
            value={post.prompt}
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            placeholder="Enter your prompt here"
            required
            className="form_textarea"
          ></textarea>
        </label>

        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Tag{" "}
            <span className="font-normal">
              (#webdevelopment, #idea, #love, #nature)
            </span>
          </span>
          <input
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            placeholder="#tag"
            required
            className="form_input"
          ></input>
        </label>

        <div className="flex-end mx-3 mb-5 gap-4">
          <Link href="/" className="text-gray-500 text-sm">
            Cancel
          </Link>
          <button
            type="submit"
            disabled={submitting}
            className="px-5 py-1.5 text-sm bg-primary-orange text-white rounded-full"
          >
            {submitting ? `${type}...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
