"use client";

export function ProfileForm({ user }: any) {
  const updateUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const body = {
      name: formData.get("name"),
      bio: formData.get("bio"),
      age: formData.get("age"),
      image: formData.get("image"),
    };

    const res = await fetch("/api/user", {
      method: "PUT",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });

    await res.json();
  };

  return (
    <div className="max-w-md mx-auto my-10 bg-white p-5 rounded-md shadow-sm">
      <h2 className="text-2xl font-semibold text-center text-gray-800">
        Edit Your Profile
      </h2>
      <form onSubmit={updateUser} className="mt-5">
        <label htmlFor="name" className="block text-gray-700">
          Name
        </label>
        <input
          type="text"
          name="name"
          defaultValue={user?.name ?? ""}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />

        <label htmlFor="bio" className="block mt-4 text-gray-700">
          Bio
        </label>
        <textarea
          name="bio"
          cols={30}
          rows={10}
          defaultValue={user?.bio ?? ""}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        ></textarea>

        <label htmlFor="age" className="block mt-4 text-gray-700">
          Age
        </label>
        <input
          type="text"
          name="age"
          defaultValue={user?.age ?? 0}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />

        <label htmlFor="image" className="block mt-4 text-gray-700">
          Profile Image URL
        </label>
        <input
          type="text"
          name="image"
          defaultValue={user?.image ?? ""}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />

        <button
          type="submit"
          className="mt-4 w-full px-3 py-2 bg-indigo-600 text-white rounded-md focus:bg-indigo-700 focus:outline-none"
        >
          Save
        </button>
      </form>
    </div>
  );
}
